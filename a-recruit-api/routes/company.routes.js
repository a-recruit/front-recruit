const { createCompany } = require("../models/company.models.js");

module.exports = app => {

    const company = require("../controllers/company.controllers.js");

    app.post('/createCompany', company.createCompany);

    app.get('/getCompanyInfo', company.getCompanyInfo);
 
};