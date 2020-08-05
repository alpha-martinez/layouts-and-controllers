const express = require('express');
const app = express();
var ejsLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs');
//home route
app.use(ejsLayouts);

app.use('/faves', require('./controllers/faves'));

app.use('/hates', require('./controllers/hates'));

app.get('/', function(req, res) {
    res.render('home');
  });

// app.get('/animals', (req, res) => {
//     res.render('animals', {title: 'Favorite Animals', 
//     animals: ['sand crab', 'corny joke dog']});
// })

// app.get('/foods', (req, res) => {
//     res.render('foods', {title: 'Favorite Foods', 
//     foods: ['enchiladas', 'tacos']});
// })

app.listen(8080);