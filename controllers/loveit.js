const express = require('express');
const router = express.Router();

router.get('/food', (req, res) => {
  res.render('love-it/foods', {foods: ['pizza', 'steak']});
});

router.get('/animals', (req, res) => {
  res.render('love-it/animals', {animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;