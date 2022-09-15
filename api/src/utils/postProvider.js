
const { Provider, Product } = require("../db.js");

const postProvider = async (obj) => {
  let { name, mail, logo, adress, phone, CUIT, title } = obj;

  // console.log(title, stars, comment);

  let providerCreate = await Provider.create({
    name,
    mail,
    logo,
    adress,
    phone,
    CUIT,
  });
  // console.log(commentCreate)

let provDb = await Product.findAll({
  where: { title: title },
  include: [Provider],
});
providerCreate.addProduct(provDb);
    return providerCreate;
};

module.exports = postProvider;

