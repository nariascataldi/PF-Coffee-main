const { Comment } = require("../db.js");

async function getComment() {
  
    let comment = await Comment.findAll()
    
  
  return comment;
}

module.exports = { getComment };
