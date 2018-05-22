// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const bcrypt = require("bcrypt-nodejs");
var Member = require("../models/member.js");
var passport = require("passport");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

// Add a member
  app.post("/api/new", function(req, res) {
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Member.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      password: hash
    }).done(function(m)
    {
      res.send(req.body.email)
    }
      
    );
    
  });
  app.post("/api/login",passport.authenticate('local'),
    function(req, res) {
   //   ;
   res.send(req.user.email);
  });
};
