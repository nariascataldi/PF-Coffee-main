
const { Order, User } = require("../../db.js");

const postOrder = async (obj) => {
  let { detail, total, paid, user} = obj;


  const orderCreate = await Order.create({
    detail,
    total,
    paid,
    user
  });
let order = await Order.findOne({where:{id: orderCreate.id}})
if(user && user.length > 0) {
User.findAll()
.then(r=>r.filter(o=>user.include(o.id)))
.then(r=>r.map(async(p)=> await orderCreate.addUser(p.id)))
}
let order2 = await Order.findOne({
  where: { id: order.id },
  include: [ User] 
});
  return order2;
};

module.exports = postOrder;

