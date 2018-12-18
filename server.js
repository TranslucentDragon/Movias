var express = require('express');
var web = express();

web.get('/', function(req, res){
  res.send('hello world');
});

web.listen(3000);