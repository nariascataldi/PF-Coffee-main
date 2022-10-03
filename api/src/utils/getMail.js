const { Newsletter, Ofert } = require("../db.js");

async function getMail() {
  let mails = await Newsletter.findAll({include: [ Ofert ]})
    .then((response) => response)
    .catch((e) => console.log(e));

  return mails;
}

module.exports = getMail;
