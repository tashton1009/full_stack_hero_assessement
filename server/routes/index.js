var router = require('express').Router();
var path = require('path');




router.get('/', function(request, response){
  response.send('hello');
})

module.exports = router;
