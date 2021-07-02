const Company = require("../models/company.models.js");
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

const dotenv = require("dotenv");
dotenv.config({path: './.env'}); 
const TOKEN = process.env.TOKEN;

exports.createCompany = (req,res)=>{
  const newCompany = new Company({
    company_name:req.body.company_name,
    company_nationality:req.body.company_nationality,
    company_representative_status:req.body.company_representative_status,
    company_rcs: req.body.company_rcs,
    company_phone_number: req.body.company_phone_number,
    company_email:req.body.company_email,
    company_headquarters:req.body.company_headquarters,
    company_zip_code:req.body.company_zip_code,
    company_city:req.body.company_city,
    company_country:req.body.company_country,
    company_department:req.body.company_department,
    company_address:req.body.company_address,
    company_representative_id:req.body.company_representative_id,
    is_partner:req.body.is_partner,
    partner_type:req.body.partner_type,
    consultant_id:req.body.consultant_id
  });

  Company.createCompany(newCompany,(err, data) => {

    if (err){

      res.json(err || {err:401});

    }else res.json(data.rows);

  });
}