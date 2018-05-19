// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

const bcrypt = require("bcrypt");
var Member = require("../models/member.js");

// Routes
// =============================================================
module.exports = function(app) {

// Add a member
  app.post("/api/new", function(req, res) {
    console.log("Member Data:");
    console.log(req.body);
    var hash = bcrypt.hashSync(req.body.password, 10);
    Member.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      password: hash
    });
  });

};
