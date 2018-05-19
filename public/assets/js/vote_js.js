var express = require("express");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

var app = express();

//stores what user uploaded
var userInput = {
  image: ""
};

//clears image upload
var clearInput = function() {
  $("imageFile").val("");
};

var getInput = function() {
  userInput.image = $("imageFile")
    .val()
    .trim();
};

//from multer npm documentation

app.post("/photos/upload", upload.array("photos", 12), function(
  req,
  res,
  next
) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
});
