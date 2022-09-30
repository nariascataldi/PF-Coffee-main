const { Newsletter } = require("../db.js");

let postMail = async (obj) => {
  
  let { mail } = obj;

  let mailCreate = await Newsletter.create({ mail });

  return mailCreate;
};

module.exports = postMail;

