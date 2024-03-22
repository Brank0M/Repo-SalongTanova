const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8005;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.basedir = app.get('views');

app.get('/', async (req, res) => {
  res.render('pages/home');
});

app.get('/about', async (req, res) => {
  res.render('pages/about');
});

app.get('/contact', async (req, res) => {
  res.render('pages/contact');
});

app.get('/prices', async (req, res) => {
  res.render('pages/prices');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
