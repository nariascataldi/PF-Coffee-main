const { User } = require('../../db.js');

let postUser = async(obj)=>{
   
  let { name, lastName, status, mail, pass, avatar, birthday, disable } = obj;

  disable = JSON.parse(disable);

  let userCreate = await User.create({
     name,
     lastName,
     status,
     mail,
     pass,
     birthday,
     disable
   });

   return userCreate
}

module.exports = postUser;
