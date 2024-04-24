const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8005;
const UAParser = require('ua-parser-js');

// const imageAssets = [
//   '../logo/logo_small.png',
//   '../videos/video32.mp4',
//   '../images/img1.jpg',
//   '../images/img3.jpg',
//   '../images/img8.jpg',
//   '../images/img2.jpg',
//   '../images/img8.jpg',
//   '../images/reklam1.png',
//   '../images/reklam2.png',
//   '../images/reklam3.png',
//   '../images/keune(1).jpg',
//   '../images/keune(2).jpg',
//   '../images/keune(3).jpg',
// ];
// if there is imageAssets loaded pass to console if not show error message
// if (imageAssets) {
//   console.log('imageAssets loaded');
// } else {
//   console.error('imageAssets not loaded');
// }
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent']);
  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';

  console.log(res.locals.isDesktop, res.locals.isPhone, res.locals.isTablet);
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.basedir = app.get('views');

// app.use((req, res, next) => {
//   res.locals.imageAssets = imageAssets;
//   next();
// });

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
