module.exports = app => {

    const job = require("../controllers/jobs.controllers.js");

    app.get("/getUnFillededJob",job.getUnFillededJob);

    app.get("/getFillededJob",job.getFillededJob);

    app.post("/createjob",  job.createjob);

  
};