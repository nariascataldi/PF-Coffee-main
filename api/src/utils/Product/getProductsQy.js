const { Product, Diet, Category, Comment, Provider, Op } = require('../../db.js');

let getProductsQy = async(data)=>{

  let prod = await Product.findAll({
                  // logging: console.log,
                  where: { title: { [Op.iLike]:  `%${data}%` } },   // [Op.substring]: data
                  include: [ Diet, Category, Comment, Provider ],  //  Provider,
                }).then( response=> response)
                  .catch( e=> console.log('Falló en getProductsQy: ',e.message) );
  return prod;
};

module.exports = { getProductsQy };
