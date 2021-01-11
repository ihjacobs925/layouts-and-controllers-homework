const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
    res.render('home');
  });

app.use('/love-it', require('./controllers/loveit'));
app.use('/leave-it', require('./controllers/leaveit'));


app.listen(3000)