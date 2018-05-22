// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var multer = require("multer");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html (home page)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // how-it-works route loads the how-it-works.html page, where users can read about how Junior Picasso works
  app.get("/how-it-works", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/how-it-works.html"));
  });

  // login route loads the login.html page, where current Members login
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // register route loads the register.html page, where new customers register as Members
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  // search route loads the search.html page, where Members can seacrch for information on artists via API
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // vote route loads the vote.html page, where Members upload pictures and vote on uploaded pictures
  app.get("/vote", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vote.html"));
  });
  var storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, __dirname + "/uploads");
    },
    filename: function(req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  });

  //Post photo uploads
  app.post("/vote", function(req, res) {
      var upload = multer({
      storage: storage,
      fileFilter: function(req, file, callback) {
        var ext = path.extname(file.originalname);
        if (
          ext !== ".png" &&
          ext !== ".jpg" &&
          ext !== ".gif" &&
          ext !== ".jpeg"
        ) {
          return callback(res.end("Only images are allowed"), null);
        }
        callback(null, true);
      }
    }).single("file-to-upload");
    upload(req, res, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
        res.send("File is uploaded");
      }
    });
  });
};
