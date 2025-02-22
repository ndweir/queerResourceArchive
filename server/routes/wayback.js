import express from 'express';

const router = express.Router();

router.get('/waybackAvailable', async (req, res) => {
    const { urlToCheck } = req.body;
    console.log(urlToCheck);
    const url = `http://archive.org/wayback/available?url=${urlToCheck}`

    try {
        const response = await fetch(url);
        console.log(response);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

export default router;
// module.exports = router;