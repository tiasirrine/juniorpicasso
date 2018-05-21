// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
var bcrypt = require("bcrypt-nodejs");

// Creates a "Member" model that matches up with DB
var Member = sequelize.define("member", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

// Syncs with DB
Member.sync();

  // Creating a custom method for our Member model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  Member.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

// Makes the Member Model available for other files (will also create a table)
module.exports = Member;