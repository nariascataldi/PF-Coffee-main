
const { Product, Diet, Category, Op } = require('../db.js');

let getProductsQy = async(data)=>{

  let prod = await Product.findAll({
                  // logging: console.log,
                  where: { title: { [Op.iLike]:  `%${data}%` } },   // [Op.substring]: data
                  include: [ Diet, Category ],
                }).then( response=> response)
                  .catch( e=> console.log('Falló en getProductsQy: ',e.message) );
  return prod;
};

module.exports = { getProductsQy };
