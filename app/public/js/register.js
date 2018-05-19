// The code in add.js handles what happens when the user clicks the "Submit" button to register as a new member.
const bcrypt = require("bcrypt");
// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newMember object
  var password = $("#password").val().trim();
  var hash = bcrypt.hashSync(password, 10);
  var newMember = {
    first_name: $("#first_name").val().trim(),
    last_name: $("#last_name").val().trim(),
    address: $("#address").val().trim(),
    email: $("#email").val().trim(),
    password: hash
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newMember)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#first_name").val("");
  $("#last_name").val("");
  $("#address").val("");
  $("#email").val("");
  $("#password").val("");

});
