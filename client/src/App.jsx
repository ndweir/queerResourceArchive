import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ResourceCard from './components/ResourceCard';
import { ApiCheck } from './components/ApiCheck';
import { DemoThingy } from './components/DemoThingy';

const API_URL = 'http://localhost:3001/api/resources';

export default function App() {
  const [resources, setResources] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchResources = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       const { data } = await axios.get(`${API_URL}?page=${page}`);
  //       setResources(data.results);
  //       setTotalPages(Math.ceil(data.totalFound / 10));
  //     } catch (err) {
  //       setError('Failed to fetch resources. Please try again later.');
  //       console.error('Error:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchResources();
  // }, [page]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-primary to-secondary py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center">
            Queer Archive Explorer
          </h1>
          <p className="text-white text-center mt-2 text-lg">
            Discover and explore queer resources from the Internet Archive
          </p>
        </div>
      </header>

      <DemoThingy />


    </div>
  );
}
