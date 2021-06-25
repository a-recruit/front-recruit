const dbConfig = require("./db.config.js");

const Pool = require('pg').Pool;

const pool = new Pool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port : 5432,
})

pool.connect(error => {
  if (error) throw error;
  console.log("Connexion réussie à la base de donnée.");
});

module.exports = pool;