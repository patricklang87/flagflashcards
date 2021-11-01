const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    console.log('endpoint reached');
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const data = response.data;
        res.json({data}); 
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;