
// The code in add.js handles what happens when the user clicks the "Submit" button to register as a new member.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

// oldwMember object
    var oldMember = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim()
    };

  // Send an AJAX POST-request with jQuery
  $.post("/api/login", oldMember)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      window.location.replace("/vote?email=" + data)
    });

  // Empty each input box by replacing the value with an empty string
  $("#email").val("");
  $("#password").val("");

});