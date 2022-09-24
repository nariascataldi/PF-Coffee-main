const { Product, Diet, Category, Provider } = require('../../db.js');
const json = require('./preloadDB/product.json');


function pushProducts() {
  
  try {     
    // let json = Object(product);

    for (let prop in json) {

      let category = prop; // console.log(category);

      json[prop].forEach(obj => {
        Product.create(obj)
          .then(async (myProduct) => {
            let allCategories = await Category.findAll();            
            let myCateg = allCategories.find(o => o.name === category);
            let incCat = myProduct.addCategory(myCateg.id);
            return myProduct;
          })
          .then(async (myProduct) => {
            let allProviders = await Provider.findAll();            
            let newsProvs = allProviders.filter(o=> obj.provider.includes(o.name));            
            let incProv = newsProvs.map( (pv)=> myProduct.addProvider(pv.id) );  
            return myProduct;
          })
          .then(async (myProduct) => {   
            if (obj.diets) {
              let allDts = await Diet.findAll();
              let newsDts = allDts.filter(o=> obj.diets.includes(o.name));
              let incDiets = newsDts.map( (d)=> myProduct.addDiet(d.id) );              
            }            
            return myProduct;
          })
          .catch(e => console.log('falló en Product.create():', e));
      });

    }
  } catch (error) {
    console.log('error al forkear el db.json:', error);
  }

};

module.exports = pushProducts;
