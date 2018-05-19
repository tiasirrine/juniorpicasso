// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();

      // Send an AJAX POST-request with jQuery
      $.get("/api/login", oldMember)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log(data);
        });
    
      // Empty each input box by replacing the value with an empty string
        $("#email").val("");
      $("#password").val("");
    
    });