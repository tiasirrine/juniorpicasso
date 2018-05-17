$('#sign-up-btn').click(function(e) {
    e.preventDefault();
    
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();

    // TODO: make sure password matches confirmPassword

    console.log('email', email);
    console.log('password', password);

    var data = {
        firstName,
        lastName,
        email,
        password,
    };

    $.ajax("/signup", {
        type: "POST",
        data,
      }).then(
        function(res) {
            console.log('res', res);
         
          // TODO: send them to home page
      }
    );

});


$('#login-btn').click(function(e) {
    e.preventDefault();
    
    var email = $('#email').val();
    var password = $('#password').val();

    console.log('email', email);
    console.log('password', password);

    var data = {
        email,
        password,
    };

    $.ajax("/login", {
        type: "POST",
        data,
      }).then(
        function(res) {
            
            console.log('login res', res);
            
            if (res.length === 0) {
                alert('User not found or incorrect password!');
            } else {
                var user = res[0];
                var firstName = user.first_name;
                var lastName = user.last_name;
                alert(`Welcome back ${firstName} ${lastName}!`);
                
            }
          // TODO: send them to home page
          res.render("/index.html");         
      }
    );

});