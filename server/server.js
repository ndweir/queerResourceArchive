import express, { json } from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import wayBackRouter from './routes/wayback.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Simple in-memory cache
const cache = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

app.use(cors());
app.use(json());

app.get('/api/resources', async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    if (page < 1) page = 1;
    if (page > 50) page = 50; // Reasonable limit

    // Check cache
    const cacheKey = `page-${page}`;
    if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp) < CACHE_DURATION) {
      return res.json(cache[cacheKey].data);
    }

    //TODO: Add a better URL or web archives here
    const url = "";


    const { data } = await axios.get(url);

    if (!data.response || !data.response.docs) {
      throw new Error('Invalid response format from Internet Archive');
    }

    const results = data.response.docs.map(doc => ({
      identifier: doc.identifier,
      title: doc.title,
      creator: doc.creator || 'Unknown',
      description: doc.description || 'No description available',
      mediatype: doc.mediatype || 'unknown',
      url: `https://archive.org/details/${doc.identifier}`
    }));

    const response = {
      totalFound: data.response.numFound,
      page,
      results
    };

    // Cache the results
    cache[cacheKey] = {
      timestamp: Date.now(),
      data: response
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching from Internet Archive:', error.message);
    res.status(500).json({
      error: 'Internal Server Error. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});


app.use('/api/wayback', wayBackRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
