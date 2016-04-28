var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var superHeroSchema = new Schema({
  alias: {type: String},
  firstName:{type:String},
  lastName: {type: String},
  city: {type: String},
  powerName: {type: String}

});
var Superhero = mongoose.model('superhero',superHeroSchema);


module.exports = Superhero;
