const express = require('express');
const router = express.Router();

router.get('/foods', (req, res) => {
    res.render('hates/foods', {title: 'Foods I hate', foods: ['tuna', 'tuna']});
})

router.get('/animals', (req, res) => {
    res.render('hates/animals', {title: 'Animals I hate', animals: ['spiders', 'tigers']});
})

module.exports = router;