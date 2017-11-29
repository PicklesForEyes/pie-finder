var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var html = require('./app/routing/htmlRoutes.js');
var api = require('./app/routing/apiRoutes.js');

app.listen(port, () => console.log(`Listening on port: ${port}`));

app.use('/', html);
app.use('/api/', api);
