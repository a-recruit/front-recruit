const Jobs = require("../models/jobs.models.js");


exports.getFillededJob = (req,res)=>{

    const user_id = req.body.user_id

    Jobs.getFillededJob(user_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.getUnFillededJob = (req,res)=>{

    const user_id = req.body.user_id

    Jobs.getUnFillededJob(user_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.getFillededJobLimit4 = (req,res)=>{

    const user_id = req.body.user_id

    Jobs.getFillededJobLimit4(user_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.getUnFillededJobLimit4 = (req,res)=>{

    const user_id = req.body.user_id

    Jobs.getUnFillededJobLimit4(user_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.createjob = (req, res) => {

    const newJob = new Jobs ({

        job_title : req.body.job_title,
        job_contract_type : req.body.job_contract_type,
        job_presentation_pdf : req.body.job_presentation_pdf,
        job_presentation_video : req.body.job_presentation_video,
        job_country : req.body.job_country,
        job_department : req.body.job_department,
        job_city : req.body.job_city,
        job_zip_code : req.body.job_zip_code,
        job_required_level : req.body.job_required_level,
        job_required_grad : req.body.job_required_grad,
        job_required_experience : req.body.job_required_experience,
        job_creator_id : req.body.job_creator_id,
        job_origin : req.body.job_origin,
        job_statut : req.body.job_status
    });
   
    Jobs.createjob(newJob, (err, data) => {

        if (err){

            res.status(500).json({
              message:
                err.message || "Une erreur pendant l'ajout à la base de donnée"
            });
    
          }else res.json(data.rows);
    });
    
};
