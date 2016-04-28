var express = require('express');
var index = require('./routes/index')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;
//second route if I need one

//configs
app.use(express.static('server/public'));
app.use(bodyParser.json());

MongoDB.on('error', function(err){
  console.log("mongo error server.js line 15", err);
});
MongoDB.once('open', function(){
  console.log('Connection is open!');
});



//routes
app.use('/', index);
//second route (app.use) of I need one
//server

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('listening on port', port);
})
