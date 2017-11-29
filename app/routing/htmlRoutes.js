var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
})

router.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
})

router.get('/:name', (req, res) => {
  res.redirect('/')
})


module.exports = router;