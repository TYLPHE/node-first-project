var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});
router.get('/index', function(req, res) {
  res.render('index');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/contact-me', (req, res) => {
  res.render('contact-me');
});
router.get('*', (req, res) => {
  res.render('404');
});

module.exports = router;
