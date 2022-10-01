
const { Order, Diet, CategoryUser } = require("../../db.js");

const postOrder = async (obj) => {
  let { detail, total} = obj;


  const orderCreate = await Order.create({
    detail,
    total
  });


  
  return orderCreate;
};

module.exports = postOrder;

