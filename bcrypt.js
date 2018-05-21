const bcrypt = require("bcrypt-nodejs");
var userpw = 'someSillyPW1234!'
// Function to encrypt user password before storing in db
bcrypt.hash(userpw, 10, function (err, hash) {
    // Store hash in database
    console.log(hash);

    // Function to compare user password to hashed password in db
    bcrypt.compare("wrong password 1 2 3 ", hash, function (err, res) {
        if (res) {
            // Passwords match
            console.log("#1It's a match!!");
        } else {
            // Passwords don't match
            console.log("#1Wrong password");
        }
    });

    // Function to compare user password to hashed password in db
    bcrypt.compare(userpw, hash, function (err, res) {
        if (res) {
            // Passwords match
            console.log("#2It's a match!!");
        } else {
            // Passwords don't match
            console.log("#2Wrong password");
        }
    });
});