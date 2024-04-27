const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8005;
const UAParser = require('ua-parser-js');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent']);
  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';

  next();
});

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
