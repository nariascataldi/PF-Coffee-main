const { User } = require('../db.js');

let postUser = async(obj)=>{
  try {
    console.log('input en utils postUser API: ', obj);
    let { name, lastName, status, mail, pass, avatar, birthday } = obj;
    // capitalize
    if (name.includes(' ')) {
      name = name.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
    } else { name = name[0].toUpperCase().concat(name.slice(1).toLowerCase()) };

    let user = await User.create({ name, lastName, status, mail, pass, avatar, birthday });  
   
    return user;
    
  } catch (error) { console.log(error) };
  
};

module.exports = postUser;
