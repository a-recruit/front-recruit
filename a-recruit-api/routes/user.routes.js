module.exports = app => {

    const user = require("../controllers/user.controllers.js");

    app.get("/test",user.test);

    app.post("/ajout",user.addData);

    app.post("/DB_CREATE",user.createDb);

  
};