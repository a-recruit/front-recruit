const User = require("../models/user.models.js");

exports.test = (req,res)=>{

  User.test((err, data) => {

    if (err){

      res.status(500).json({
        message:
          err.message || "Une erreur pendant le test de la base de donnée."
      });

    }else res.json(data.rows);

  });

}

exports.addData = (req,res)=>{

  const newUser = new User({
    id: req.body.id,
    name:req.body.name,
    firstname: req.body.firstname,
    mail: req.body.mail,
  });

  User.addData(newUser,(err, data) => {

    if (err){

      res.status(500).json({
        message:
          err.message || "Une erreur pendant l'ajout à la base de donnée"
      });

    }else res.json(data.rows);

  });

  
}

exports.createDb = (req,res)=>{
  User.createDb((err, data) => {

    if (err){

      res.status(500).json({
        message:
          err.message || "Une erreur pendant le test de la base de donnée."
      });

    }else res.json(data.rows);

  });
}

















































/*
exports.signup = (req, res) => {

  //encrypter le mot de passe avec hashage
  bcrypt.hash(req.body.user_password,12,function(err,hash){
    
    // Create a User
    const user = new User({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: hash
    });

    // Save User in the database
    User.signup(user, (err, data) => {

      if (err){

        res.status(500).json({
          message:
            err.message || "Some error occurred while creating the user."
        });

      }else res.json(data);

    });

  });

  

};

exports.login = (req, res) => {

  // Create a User
  const user = new User({
    user_email: req.body.user_email,
    user_password: req.body.user_password
  });

  User.login(user,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else{
      bcrypt.compare(user.user_password,data.user_password,function(err,result){
        if(!err && result){
          const claims = {user_id : data.user_id, user_name:data.user_name};
          const jwt =  Jwt.sign(claims,"ac66e3d2-c588-4f18-aa64-64ebebd875e4",{expiresIn: '1h'});
          res.setHeader('Set-Cookie',cookie.serialize('auth',jwt,{
            httpOnly:true,
            secure:process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 3600,
            path: "/"
          }))
          res.json({aumessage:jwt});
        }else{
          res.json({message:"bro you are note registered"})
        }
      });
    }
  });
};

exports.getAll = Middleware.authenticated((req,res)=>{

  User.getAll((err, data) => {

    if (err){
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the user."
      });

    }else res.json(data);

  });

});
*/