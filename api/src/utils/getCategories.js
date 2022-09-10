const axios = require('axios').default;
const { Category } = require('../db.js');


async function getCategories(){

  let c = await Category.findAll()
    .then( async(r) => r )
    .catch( e=> console.log(e) );
  // console.log(Categorys);
  return c;
}

module.exports = { getCategories };
