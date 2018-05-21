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
  app.post("/login", function(req, res) {
    console.log('req.body', req.body); // { email: 'blah', password: 'ho noora!' }
  
    // object destructuring
    var { email, password } = req.body;
    //var email = req.body.email;
    //var password = req.body.password;
  
    var queryString = `SELECT * FROM users WHERE email = "${email}"`;
    console.log(queryString);
  
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log('result', result);
      //return result;
      bcrypt.compare(password, result[0].password, function(err, match){
       console.log(password, result[0].password);
  
        if (match) {
          // Passwords match
          console.log("It's a match!!");
          res.send(result);
        
      } else {
          // Passwords don't match
          console.log("Wrong password");
      }
      });
     
    });
  });
};
