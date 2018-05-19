// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const multer = require("multer");
const upload = multer({
  dest: "uploads/" // this saves your file into a directory called "uploads"
});

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add route loads the add.html page, where users can enter new books to the db
  app.get("/how-it-works", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/how-it-works.html"));
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // short route loads the short.html page, where short books in the db are displayed
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  // long route loads the long.html page, where long books in the db are displayed
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // long route loads the long.html page, where long books in the db are displayed
  app.get("/vote", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vote.html"));
  });
  app.post("/vote", upload.single("file-to-upload"), (req, res) => {
    res.redirect("/vote");
  });
};
