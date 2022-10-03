const { parse } = require('dotenv');
const { Product, Diet, Category, Provider } = require('../../db.js');

let postProduct = async(obj)=>{
  try {
    console.log('input en utils postProduct API: ', obj);

    let { title, disable, price, description, image, stock, cost, margin, discount, diets, categories, providers  } = obj;
    disable = JSON.parse(disable);

    // capitalize
    if (title.includes(' ')) {
       title = title.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
    } else { title = title[0].toUpperCase().concat(title.slice(1).toLowerCase()) };

    let prod = await Product.create({ title, disable, price, description, image, stock, cost, margin, discount });  


    let prodCread = await Product.findOne({ where: { title: title } }); //  console.log(prodCread); console.log(title);

    if (diets && diets.length > 0 ){
      Diet.findAll() 
        .then(r=> r.filter(o=> diets.includes(o.name)) )
        .then(r=> r.map( async(d)=> await prodCread.addDiet(d.id) ) )   // d.dataValues.id
        .catch(e=> console.log(e))   
    };  
    if (categories && categories.length > 0 ){
      Category.findAll()
        .then(r=> r.filter(o=> categories.includes(o.name)) )
        .then(r=> r.map( async(c)=> await prodCread.addCategory(c.id) ) )   // dt.dataValues.id
        .catch(e=> console.log(e))
    };  
    if (providers && providers.length > 0 ){
      Provider.findAll()
        .then(r=> r.filter(o=> providers.includes(o.name)) )
        .then(r=> r.map( async(p)=> await prodCread.addProvider(p.id) ) )   // dt.dataValues.id
        .catch(e=> console.log(e))
    };
      
    let prodCreated = await Product.findOne({
      where: { id: prodCread.id },
      include: [ Diet, Category, Provider ] 
    });

    return prodCreated;
    // return prod;
    
  } catch (error) { console.log(error) };
  
};

module.exports = postProduct;
