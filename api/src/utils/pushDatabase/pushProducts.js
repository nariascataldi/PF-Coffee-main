const { Product, Diet, Category } = require('../../db.js');
const json = require('../../../product.json');


function pushProducts() {
  
  try {     
    // let json = Object(product);

    for (let prop in json) {

      let category = prop; // console.log(category);

      json[prop].forEach(obj => {
        Product.create(obj)
          .then(async (myProduct) => {
            // let allDts = await Diet.findAll();
            let allCategories = await Category.findAll();
            // await Promise.all( [allDts, allCategories] ); // si fuesen más promesas

            // let newsDts = allDts.filter(o=> obj.diets.includes(o.name));
            let myCateg = allCategories.find(o => o.name === category);

            // let incDiets = newsDts.map( (d)=> myProduct.addDiet(d.id) );
            let incCat = myProduct.addCategory(myCateg.id);

          })
          .catch(e => console.log('falló en Product.create():', e));
      });

    }
  } catch (error) {
    console.log('error al forkear el db.json:', error);
  }

};

module.exports = pushProducts;
