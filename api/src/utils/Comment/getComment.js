const { Comment } = require("../../db");

async function getComment() {
  
    let comment = await Comment.findAll()
    
  
  return comment;
}

module.exports = { getComment };
