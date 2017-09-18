var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(express.static(path.resolve('./target')));
app.use(bodyParser.json());

//for local host:
//var server = app.listen(3000, function () {
//for server:
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('server is up! :)');

})

require('./rest/userRest')(app);
require('./rest/answerRest')(app);
require('./rest/questionRest')(app);
require('./rest/commentRest')(app);