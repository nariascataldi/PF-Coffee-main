const { Product, User, Order } = require('../../db.js');


async function getUsers () {

  let users = await User.findAll({ include:  Product, Order })  
      

  return users;

};

module.exports =  getUsers;
