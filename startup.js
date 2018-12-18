var controller = require('./Controller');
var express = require('express');

var web = express();
web.set('view engine', 'pug');

web.get('/', function(req, res){
  res.render('./home.pug', {title: 'Hello', message: 'Welcome!'});
});


props = {
};

const controller = new controller(props);

web.post('addEntry', function(req, res){
  controller.addEntry(req.entry, (error, status) =>{
    if (error) {
        res.render('./home.pug', {title: 'status', message: status});
        console.log(error);
    }
    res.send("Success:" + status);
  });
});

web.listen(3000);