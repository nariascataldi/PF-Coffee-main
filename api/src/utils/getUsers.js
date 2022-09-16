const { Product, User } = require('../db.js');


async function getUsers () {

  let users = await User.findAll({ include:  Product })  
      

  return users;

};

module.exports =  getUsers;
