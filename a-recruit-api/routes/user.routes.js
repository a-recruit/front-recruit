module.exports = app => {

    const user = require("../controllers/user.controllers.js");

    app.get("/test",user.test);

  
};