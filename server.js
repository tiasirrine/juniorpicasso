var express = require("express");
var bodyParser = require("body-parser");

var connection = require("./config/connection.js");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("#");

//app.use(routes);
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/signup", function(req, res) {
  res.render("signup");
});

app.post("/signup", function(req, res) {
  console.log('req.body', req.body); // { email: 'blah', password: 'ho noora!' }

  // object destructuring
  var { firstName, lastName, email, password } = req.body;
  //var email = req.body.email;
  //var password = req.body.password;

  var queryString = `INSERT INTO users (first_name, last_name, email, password) VALUES ("${firstName}", "${lastName}", "${email}", "${password}");`;

  console.log(queryString);

  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
  });
  return "success";
});

app.post("/login", function(req, res) {
  console.log('req.body', req.body); // { email: 'blah', password: 'ho noora!' }

  // object destructuring
  var { email, password } = req.body;
  //var email = req.body.email;
  //var password = req.body.password;

  var queryString = `SELECT * FROM users WHERE email = "${email}" and password = "${password}"`;

  console.log(queryString);

  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    console.log('result', result);
    //return result;
    res.json(result);
  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
