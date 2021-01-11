const express = require('express');
const router = express.Router();


router.get('/movies', (req, res) => {
    res.render('leave-it/movies', {movies: ['The Room', 'Wonder Woman 2']})
  });

router.get('/products', (req, res) => {
    res.render('leave-it/products', {products: ['Apple', 'Zune']})
  });

module.exports = router;