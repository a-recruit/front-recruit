const psql = require("../configs/db.js");

// constructor
const User = function(user) {
  this.id = user.id;
  this.name = user.name;
  this.firstname = user.firstname;
  this.mail = user.mail;
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

User.addData = (newUser,result)=>{ 

  psql.query('INSERT INTO yohann  (id,name,firstname,mail) VALUES ($1,$2,$3,$4) RETURNING id;',
  [newUser.id,newUser.name,newUser.firstname,newUser.mail], 
  (err, res) => {
    
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