module.exports = app => {

    const user = require("../controllers/user.controllers.js");

    app.get("/test",user.test);

<<<<<<< HEAD
    app.post("/signup",user.signup);

    app.post('/createUserInfo',user.createUserInfo);

    app.post("/login",user.login);

    app.post("/DB_CREATE",user.createDb);
    

=======
    app.post('/ajout', user.addData);
>>>>>>> 490df0ad0653568d24a9d6a7422c67fd4eaf51c1
  
};