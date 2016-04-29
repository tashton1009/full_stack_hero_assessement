var express = require('express');
var index = require('./routes/index')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoURI = "mongodb://localhost:27017/superheroes";
var MongoDB = mongoose.connect(mongoURI).connection;
var heroRoutes = ('./routes/heroRoutes');

//configs

app.use(bodyParser.json());
app.use(express.static('server/public'));


MongoDB.on('error', function(err){
  console.log("mongo error server.js line 15", err);
});
MongoDB.once('open', function(){
  console.log('Connection is open!');
});



//routes
app.use('/', index);
//this line is causing all the ttrouble I'm going to die

//app.use('/add', heroRoutes);



//server

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('listening on port', port);
})
