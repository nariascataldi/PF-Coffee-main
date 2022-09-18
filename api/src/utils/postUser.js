const { User } = require('../db.js');

let postUser = async(obj)=>{
   
  let { name, lastName, status, mail, pass, avatar, birthday } = obj;

   let userCreate = await User.create({
     name,
     lastName,
     status,
     mail,
     pass,
     birthday,
   });

   return userCreate
}

module.exports = postUser;
