const { User, Product, Order, Comment, Provider, Op } = require('../../db.js');

let getUsersQy = async(data)=>{

  let users = await User.findAll({
                  // logging: console.log,
                  where: { name: { [Op.iLike]:  `%${data}%` } },   // [Op.substring]: data
                  include: [ Product, Order, Comment ],  //  Provider,
                }).then( response=> response)
                  .catch( e=> console.log('Falló en getUsersQy: ',e.message) );
  return users;
};

module.exports = { getUsersQy };
