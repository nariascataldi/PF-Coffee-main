
const { Provider, Product } = require("../../db.js");

const postProvider = async (obj) => {
  let { name, mail, logo, adress, phone, CUIT, products, disable } = obj;

  disable = JSON.parse(disable);

  let providerCreate = await Provider.create({
    name,
    mail,
    logo,
    adress,
    phone,
    CUIT,
    disable
  });

  if (products && products.length > 0 ){
    Product.findAll()
      .then(r=> r.filter(o=> products.includes(o.title)) )
      .then(r=> r.map( async(p)=> await providerCreate.addProduct(p.id) ) )   // dt.dataValues.id
      .catch(e=> console.log(e))
  };

  let prov =  await Provider.findOne({
      where: { name: name },
      include: [Product
      ] 
    });

  // return providerCreate;
  return prov;
};

module.exports = postProvider;

