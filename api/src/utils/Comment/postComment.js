const { Product, Comment, User } = require("../../db.js");

const postComment = async (obj) => {
  let { id, stars, comment } = obj;

  console.log(id, stars, comment);
  

  let commentCreate = await Comment.create({ stars, comment });
  // console.log(commentCreate)

  let prod = await Product.findByPk(id);
  commentCreate.setProduct(prod.id);
  let user = await User.findByPk(id)
  commentCreate.setUser(user.id)

  return commentCreate
};

module.exports = postComment;
 
          
