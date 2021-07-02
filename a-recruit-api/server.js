/*
* Setup du serveur web.  Next.js API route support: https://nextjs.org/docs/api-routes/introduction
* @copyright  Copyright (c) 06-2021 Prince Nick BALLO
* @license    ....
* @link       https://github.com/...
* @since      0.1.0
*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 3080;

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "MON API Node.js , Express.js , Postgress" });
});

require("./routes/user.routes.js")(app);
require("./routes/jobs.routes.js")(app);
require("./routes/company.routes.js")(app);
require("./routes/cv_bank.routes.js")(app);

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});