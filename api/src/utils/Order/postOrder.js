
const { Order, Product, User } = require("../../db.js");

const postOrder = async (obj) => {
  let { id, title, price, products, mail, quantity, total } = obj;

 

  let orderCreate = await Order.create({
    id_user: mail,
    prod_title: title,
    detail:  " Units: " + quantity,
    payment: "Mercado Pago",
    total: total 
  });

  if (products && products.length > 0 ){
    Product.findAll()
      .then(r=> r.filter(o=> products.includes(o.title)) )
      .then(r=> r.map( async(p)=> await orderCreate.addProduct(p.id) ) )   // dt.dataValues.id
      .catch(e=> console.log(e))
  };
  let usr = await User.findByPk(mail);
  orderCreate.setUser(usr.mail);
 

  
  return orderCreate;
};

module.exports = postOrder;

