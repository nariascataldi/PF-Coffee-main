const { Ofert, Diet, Category, User, Product, Newsletter } = require('../../db.js');

let postOfert = async(obj)=>{
  try {
    console.log('input en utils postProduct API: ', obj);

    let { title, disable, price, description, image, sale, diets, categories, users, products, newsletters, dateStart, dateEnd  } = obj;
    
    // capitalize
    // if (title.includes(' ')) {
    //    title = title.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
    // } else { title = title[0].toUpperCase().concat(title.slice(1).toLowerCase()) };

    let ofert = await Ofert.create({ title, disable, price, description, image, sale, dateStart, dateEnd });  


    let ofertCread = await Ofert.findOne({ where: { title: title } }); //  console.log(prodCread); console.log(title);

    if (diets && diets.length > 0 ){
      Diet.findAll() 
        .then(r=> r.filter(o=> diets.includes(o.name)) )
        .then(r=> r.map( async(d)=> await ofertCread.addDiet(d.id) ) )   // d.dataValues.id
        .catch(e=> console.log(e))   
    };  
    if (categories && categories.length > 0 ){
      Category.findAll()
        .then(r=> r.filter(o=> categories.includes(o.name)) )
        .then(r=> r.map( async(c)=> await ofertCread.addCategory(c.id) ) )   // dt.dataValues.id
        .catch(e=> console.log(e))
    };  
    if (users && users.length > 0 ){
      User.findAll()
        .then(r=> r.filter(o=> users.includes(o.mail)) )
        .then(r=> r.map( async(p)=> await ofertCread.addUser(p.id) ) )   // dt.dataValues.id
        .catch(e=> console.log(e))
    };
    if (products && products.length > 0 ){
      Product.findAll()
        .then(r=> r.filter(o=> products.includes(o.title)) )
        .then(r=> r.map( async(h)=> await ofertCread.addProduct(h.id) ) )   // dt.dataValues.id
        .catch(e=> console.log(e))
    };
    if (newsletters && newsletters.length > 0 ){
      Newsletter.findAll() 
        .then(r=> r.filter(o=> newsletters.includes(o.mail)) )
        .then(r=> r.map( async(d)=> await ofertCread.addNewsletter(d.mail) ) )   // d.dataValues.id
        .catch(e=> console.log(e))
    }; 
      
    let ofertCreated = await Ofert.findOne({
      where: { id: ofertCread.id },
      include: [ Diet, Category, User, Product, Newsletter ] 
    });

    return ofertCreated;
    // return prod;
    
  } catch (error) { console.log(error) };
  
};

module.exports = postOfert;
