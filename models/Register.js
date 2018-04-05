var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Register = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
   email: {
    type: String
  },
   mobilenumber: {
    type: Number
  },
   password: {
    type: String
  },
   confirmPassword: {
    type: String
  }
},{
    collection: 'register'
});

module.exports = mongoose.model('registser', Register);