'use strict';

var express = require('express');
var app = express();
var getBusiness = require(__dirname + '/index.js');
app.use(express.static('app'));

app.get('/business', function(req, res) {
  getBusiness.callApi(req.query.location, res);
});

app.listen(3000, function() {
  console.log('server running on port 3000');
});
