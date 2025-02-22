import express from 'express';

const router = express.router();

router.get('/waybackAvailable', async (req, res) => {
    const { urlToCheck } = req.body;

    const url = `http://archive.org/wayback/available?url=${urlToCheck}`;

    try {
        const response = await fetch(url);
        console.log(response);
        res.sendStatus(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})
module.exports = router;