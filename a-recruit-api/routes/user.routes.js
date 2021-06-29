module.exports = app => {

    const user = require("../controllers/user.controllers.js");

    app.get("/test",user.test);

    app.post("/inscription",user.signup);

    app.post("/connexion",user.login);

    app.post("/DB_CREATE",user.createDb);

  
};