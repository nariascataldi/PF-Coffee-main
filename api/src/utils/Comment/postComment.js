const { Product, Comment, User } = require("../../db.js");

const postComment = async (obj) => {
  let { id, stars, comment, user } = obj;

  console.log(id, stars, comment, user);
  

  let commentCreate = await Comment.create({ stars, comment });
  // console.log(commentCreate)

  let prod = await Product.findByPk(id);
  commentCreate.setProduct(prod.id);
  let users = await User.findByPk(user)
  commentCreate.setUser(users.id)

  return commentCreate
};

module.exports = postComment;
 
          
