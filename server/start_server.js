var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var staticPath = path.resolve('./react/dist');
app.use(express.static(staticPath));
console.log(staticPath);
app.use(bodyParser.json());

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('server is up! :)');

})

require('./rest/userRest')(app);
require('./rest/answerRest')(app);
require('./rest/questionRest')(app);
require('./rest/commentRest')(app);
require('./rest/summaryQuestionnaireRest')(app);