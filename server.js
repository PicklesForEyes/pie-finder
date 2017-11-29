var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var html = require('./app/routing/htmlRoutes.js');
var api = require('./app/routing/apiRoutes.js');

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.use('/', html);
app.use('/api/', api);
