var express = require('express');
var bodyParser = require('body-parser')
var pies = require('../data/pies.js')
var router = express.Router();

router.use(bodyParser.json());

router.get('/pies', (req, res) => {
  res.json(pies)
})

router.post('/pies', (req, res) => {
  pies.push(req.body);
})

module.exports = router;
