var assert = require('chai').assert;
var foo = 'bar';
var tea = 9;

var passport = require('../app/config/passport');
var connection = require('../app/config/connection');
var member = require('../app/models/member');
var htmlRoutes = require('../app/routes/html-routes');

//console.log('passport', passport);

var usernameField = passport._strategies.local._usernameField;
var passwordField = passport._strategies.local._passwordField;

//console.log('usernameField', usernameField);
//console.log('passwordField', passwordField);

var dialect = connection.options.dialect;
//console.log('connection', connection);

console.log('member', member);
console.log('htmlRoutes', htmlRoutes);

try {

    // make sure passport accepts an email and password
    assert.equal(usernameField, 'email');
    assert.equal(passwordField, 'password');

    // make sure database is mysql
    assert.equal(dialect, 'mysql');
    //dialect: "mysql"

    assert.typeOf(htmlRoutes, 'Object');

    //assert.typeOf(foo, 'string');
    //assert.equal(foo, 'bar');
    //assert.lengthOf(foo, 3)
    // assert.property(tea, 'flavors');  assert.lengthOf(tea.flavors, 3);
} catch (e) {
    console.log('e', e);
}