const { Product, Diet, Category, Provider, Comment, Ofert } = require('../../db.js');


async function getIDproduct (id) {

  try {
    let response = await Product.findOne({
        // logging: console.log,
        where: { id: id },
        include: [ Diet, Category, Provider, Comment, Ofert ] // Provider,
      });
    return response;

  } catch (e) { console.log('falló el get a DB(/:id): ', e.message) }

};

module.exports = getIDproduct;
