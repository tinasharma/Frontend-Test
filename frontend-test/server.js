'use strict';

var express = require('express');
var app = express();

var http = require('http');

app.get('/', function(req, res) {
  console.log("hello");
});

//var url = "http://www.codingchallenge.datasphere.com:8084/getbusinesses/?location=47.5458,-122.31361&pg=1&pz=12&callback=mycallback";

//didn't get to create this route
app.get('/loc/', function(req, res) {

});

app.listen(3000, function() {
  console.log('server running on port 3000');
});
