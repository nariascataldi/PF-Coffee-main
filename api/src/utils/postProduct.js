const { Product, Diet, Category } = require('../db.js');

let postProduct = async(obj)=>{
  console.log('input en utils postProduct API: ', obj);
  let { title, image, price, description, likes, diets, categories  } = obj;
  // capitalize
  if (title.includes(' ')) {
    title = title.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
  } else { title = title[0].toUpperCase().concat(title.slice(1).toLowerCase()) };


  let prod = await Product.create({ title, image, price, description, likes });  

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
      .then(r=> r.map( async(dt)=> await prodCread.addCategory(dt.id) ) )   // dt.dataValues.id
      .catch(e=> console.log(e))
  };  
    
  let prodCreated = await Product.findOne({
    where: { id: prodCread.id },
    include: [ Diet, Category ]
  });

  return prodCreated;
};

module.exports = postProduct;
