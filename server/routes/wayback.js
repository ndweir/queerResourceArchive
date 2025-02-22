import express from 'express';
import axios from 'axios';
const router = express.Router();


//Pulls the most recent archive of a given web site from the wayback machine
router.get('/waybackAvailable', async (req, res) => {
    const { urlToCheck } = req.query;

    console.log('waybackAvailable route triggered');
    console.log(urlToCheck);

    const url = `http://archive.org/wayback/available?url=${urlToCheck}`

    try {
        const response = await axios.get(url);
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

export default router;
// module.exports = router;