const { Ofert } = require('../../db.js');
const { Diet, Category, User } = require('../../db.js');

async function getOferts () {

  let oferts = await Ofert.findAll({include: [ Diet, Category, User ]})  // {include: [ Diet, Category ]}
      .then( response=> response)
      .catch( e=> console.log(e) );

  return oferts;

};

module.exports =  getOferts;
