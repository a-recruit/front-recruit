const psql = require("../configs/db.js");

// constructor
const Company = function(company) {
  
  this.company_name = company.company_name;
  this.company_nationality = company.company_nationality;
  this.company_phone_number = company.company_phone_number;
  this.company_headquarters = company.company_headquarters;
  this.company_address = company.company_address;
  this.company_department = company.company_department;
  this.company_city = company.company_city;
  this.company_rcs = company.company_rcs;
  this.company_zip_code = company.company_zip_code;
  this.company_country = company.company_country;
  this.company_representative_id = company.company_representative_id;
  this.company_representative_status = company.company_representative_status;
  this.is_partner = company.is_partner;
  this.partner_type = company.partner_type;
  this.consultant_id = company.consultant_id;
};

Company.createCompany =(user_id,result)=>{
  psql.query('INSERT INTO company (company_representative_id) VALUES ($1) RETURNING company_id',[user_id],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

Company.updateCompanyInfo = (company,result)=>{ 

  psql.query('UPDATE company SET'+
  'company_name = $1 AND company_nationality = $2 AND company_address= $3 AND company_department = $4 AND company_representative_status = $5 AND company_phone_number= $6 AND company_headquarters = $7 AND company_city = $8 AND company_rcs = $9 AND company_zip_code =$10 AND company_country = $11 AND is_partner = $12 AND partner_type = $13 AND consultant_id= $14  WHERE company_id = $15',
  [
    company.company_name,
    company.company_nationality,
    company.company_address,
    company.company_department,
    company.company_representative_status,
    company.company_phone_number,
    company.company_headquarters,
    company.company_city,
    company.company_rcs,
    company.company_zip_code,
    company.company_country,
    company.is_partner,
    company.partner_type,
    company.consultant_id,
    company.company_id
  ], 
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

Company.getCompanyInfo = (user_id,result)=>{
  psql.query('SELECT company_id,company_name,company_nationality,company_representative_status,company_rcs,company_phone_number,company_headquarters,company_department,company_zip_code,company_city,company_address,company_country FROM company WHERE company_representative_id = $1',[user_id],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

module.exports = Company;