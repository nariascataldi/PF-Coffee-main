const { Ofert, Diet, Category, User } = require('../../db.js');

let postOfert = async(obj)=>{
  try {
    console.log('input en utils postProduct API: ', obj);

    let { title, disable, price, description, image, sale, diets, categories, users  } = obj;
    
    // capitalize
    // if (title.includes(' ')) {
    //    title = title.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
    // } else { title = title[0].toUpperCase().concat(title.slice(1).toLowerCase()) };

    let ofert = await Ofert.create({ title, disable, price, description, image, sale });  


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
        .then(r=> r.filter(o=> users.includes(o.name)) )
        .then(r=> r.map( async(p)=> await ofertCread.addUser(p.id) ) )   // dt.dataValues.id
        .catch(e=> console.log(e))
    };
      
    let ofertCreated = await Ofert.findOne({
      where: { id: ofertCread.id },
      include: [ Diet, Category, User ] 
    });

    return ofertCreated;
    // return prod;
    
  } catch (error) { console.log(error) };
  
};

module.exports = postOfert;
