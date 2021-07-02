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

Company.createCompany = (newCompany,result)=>{ 

  psql.query('INSERT INTO company '+
  '(company_name,company_nationality,company_address,company_department,company_representative_status,company_phone_number,company_headquarters,company_city,company_rcs,company_zip_code,company_country,is_partner,partner_type,consultant_id,company_representative_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)',
  [
    newCompany.company_name,
    newCompany.company_nationality,
    newCompany.company_address,
    newCompany.company_department,
    newCompany.company_representative_status,
    newCompany.company_phone_number,
    newCompany.company_headquarters,
    newCompany.company_city,
    newCompany.company_rcs,
    newCompany.company_zip_code,
    newCompany.company_country,
    newCompany.is_partner,
    newCompany.partner_type,
    newCompany.consultant_id,
    newCompany.company_representative_id
  ], 
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

module.exports = Company;