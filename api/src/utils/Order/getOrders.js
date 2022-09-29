const { Order, Product, User } = require('../../db.js');

async function getOrders () {

  let orders = await Order.findAll({include: [ Product, User ]})  
      .then( response=> response)
      .catch( e=> console.log(e) );

  return orders;

};

module.exports =  getOrders;