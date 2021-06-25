const psql = require("../configs/db.js");

// constructor
const User = function(user) {
  this.user_email = user.user_email;
  this.user_name = user.user_name;
  this.user_password = user.user_password;
};

User.test = (result)=>{

  psql.query("SELECT * FROM public.yohann ", (err, res) => {
    
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

module.exports = User;































/*
User.signup = (newUser, result) => {

  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });

};

User.login = (lodedUser, result) => {
  
    sql.query("SELECT * FROM user WHERE user_email= ? ",[lodedUser.user_email], (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null,res[0]);
    });
};

User.getAll = (result) => {

  sql.query("SELECT * FROM user ", (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
  
}

module.exports = User;
*/