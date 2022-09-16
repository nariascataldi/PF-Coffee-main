const { Product, User, Comment, Order } = require('../db.js');


async function getUsers () {

  let users = await User.findAll({include: [ Product, Order, Comment ]})  
      .then( response=> response)
      .catch( e=> console.log(e) );

  return users;

};

module.exports =  getUsers;
