var request = require('request');

module.exports.callApi = function(latLong, response) {
  var url = "http://codingchallenge.datasphere.com:8084/getbusinesses/?location=" + latLong + "&pg=1&pz=10&callback=mycallback";
  request(url, function(error, res, body) {
  //used RegEx to remove the callback that the JSON data was wrapped around
  var jsonRes = /mycallback\((.*)\)/g.exec(res.body);
  response.send(jsonRes[1]);
  });
}
