const { Product, Comment } = require("../db.js");

const postComment = async (obj) => {
  let { title, stars, comment } = obj;

  // console.log(title, stars, comment);
  

  let commentCreate = await Comment.create({ stars, comment });
  // console.log(commentCreate)

  let commentDb = await Product.findAll({
    where: { title: title },
    include: [Comment],
  });
  commentCreate.setProduct(commentDb[0]);

  return commentCreate
};

module.exports = postComment;
 
          
