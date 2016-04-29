var express = require('express');
var router = express.Router();
var path = require('path');
var Superhero = require('../../models/superhero');
var bodyParser = require('body-parser');


router.get('/', function(request, response){
  Superhero.find({}, function(err, superhero){
    if(err){
      console.log(err);
    }else{
      response.send(superhero);
    }
  });
});

router.post('/add', function(request, response){
  console.log(request.body);
  var superhero = new Superhero({
    alias:request.body.alias,
    firstName:request.body.firstName,
    lastName:request.body.lastName,
    city:request.body.city,
    powerName: request.body.powerName
  });
  superhero.save(function(err){
    if(err){
      conosle.log(err);
      response.sendStatus(500);
    }else{
      response.send('Its getting down to here', superhero)
    }
    //return router;

  });
  //return router;
});
//return router;

module.exports = router;
