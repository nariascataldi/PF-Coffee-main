
const { Order, Diet, CategoryUser } = require("../../db.js");

const postOrder = async (obj) => {
  let { detail, total, paid} = obj;


  const orderCreate = await Order.create({
    detail,
    total,
    paid
  });


  
  return orderCreate;
};

module.exports = postOrder;

