const Company = require("../models/company.models.js");
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');


exports.createCompany = (req,res)=>{

  const user_id= req.body.user_id;

  Company.createCompany(user_id,(err, data) => {

    if (err){

      res.json(err || {err:401});

    }else res.json(data.rows);

  });
}

exports.updateCompanyInfo = (req,res)=>{
  
  const company = new Company({
    company_id:req.body.company_id,
    company_name:req.body.company_name,
    company_nationality:req.body.company_nationality,
    company_address:req.body.company_address,
    company_department:req.body.company_department,
    company_representative_status:req.body.company_representative_status,
    company_phone_number: req.body.company_phone_number,
    company_headquarters:req.body.company_headquarters,
    company_city:req.body.company_city,
    company_rcs: req.body.company_rcs,
    company_zip_code:req.body.company_zip_code,
    company_country:req.body.company_country,
    is_partner:req.body.is_partner,
    partner_type:req.body.partner_type,
    consultant_id:req.body.consultant_id
  });

  Company.updateCompanyInfo(company,(err, data) => {

    if (err){

      res.json(err || {err:401});

    }else res.json(data.rows[0]);

  });
}


exports.getCompanyInfo = (req,res)=>{

  const company_id= req.body.company_id;

  Company.getCompanyInfo(company_id,(err, data) => {

    if (err){

      res.json(err || {err:401});

    }else res.json(data.rows[0]);

  });
}