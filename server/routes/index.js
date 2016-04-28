var express = require('express');
var router = express.Router();
var path = require('path');
var Superhero = require('../../models/superhero.js')


router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, "../public/views/index.html"));
})



module.exports = router;
