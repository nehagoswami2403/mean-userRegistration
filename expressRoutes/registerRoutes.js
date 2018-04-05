var express = require('express');
var app = express();
var registerRoutes = express.Router();

// Require Item model in our routes module
var Register = require('../models/Register');

// Defined store route
registerRoutes.route('/add').post(function (req, res) {
  var register = new Register(req.body);
  console.log("comminggg"+ register);
   register.save()
    .then(item => {
    res.status(200).json({'register': 'Register added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to databasesssssssssssssssssss"+ err);
    });
});

// Defined get data(index or listing) route
registerRoutes.route('/').get(function (req, res) {
   Register.find(function (err, registers){
    if(err){
      console.log(err);
    }
    else {
      res.json(registers);
    }
  });
});

// Defined edit route
registerRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Register.findById(id, function (err, register){
      res.json(register);
  });
});

//  Defined update route
registerRoutes.route('/update/:id').post(function (req, res) {
   Register.findById(req.params.id, function(err, register) {
    if (!register)
      return next(new Error('Could not load Document'));
    else {
      register.firstname = req.body.firstname;
      register.lastname = req.body.lastname;
      register.email = req.body.email;
      register.mobilenumber = req.body.mobilenumber;
      register.password =  req.body.password;
      register.confirmPassword =  req.body.confirmPassword;

      register.save().then(register => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
registerRoutes.route('/delete/:id').get(function (req, res) {
   Register.findByIdAndRemove({_id: req.params.id}, function(err, register){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = registerRoutes;