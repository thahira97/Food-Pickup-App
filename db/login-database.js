const db  = require("./connection");

const checkUserEmail = function(email) {
  return db
  .query(`SELECT * FROM clients WHERE email = $1`, [email]);
};

module.exports = checkUserEmail;
