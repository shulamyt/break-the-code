var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('app'));
app.use(bodyParser.json());


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})

require('./server/components/userService')(app);
require('./server/components/answerService')(app);
require('./server/components/questionService')(app);