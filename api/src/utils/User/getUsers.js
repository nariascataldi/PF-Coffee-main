const { Product, User, Comment, Order } = require('../../db.js');


async function getUsers () {

  let users = await User.findAll({ include:  Product, Comment, Order })  
      

  return users;

};

module.exports =  getUsers;
