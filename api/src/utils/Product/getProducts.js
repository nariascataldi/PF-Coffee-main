const { Product } = require('../../db.js');
const { Diet, Category, Provider, Ofert } = require('../../db.js');

async function getProducts () {

  let products = await Product.findAll({include: [ Diet, Category, Provider, Ofert ]})  // {include: [ Diet, Category ]}
      .then( response=> response)
      .catch( e=> console.log(e) );

  return products;

};

module.exports =  getProducts;
