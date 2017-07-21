var express = require('express');
var app = express();
var api = require('../lib');

app.get('/', function(req, res) {
	return api.result(res, 'Hello world');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
