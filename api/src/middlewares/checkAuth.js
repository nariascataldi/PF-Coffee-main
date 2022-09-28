const jwt = require('jsonwebtoken');
const { User } = require('../db');

const checkAuth = async (req, res, next) => {

let token;

if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    
try {
  token = req.headers.authorization.split(" ")[1];

  const decoded = jwt.verify(token, process.env.SECRET);

  const infoUser = await User.findByPk(decoded.id);
  console.log(infoUser)

  req.user = {
    name: infoUser.name,
    lastName: infoUser.lastName,
    mail: infoUser.mail,
    birthday: infoUser.birthday
  };

} catch (error) {
  console.log(error)
  return res.status(404).json({ msg: 'Hubo un error'})       
}
}

if(!token) {
   const error = new Error("Invalid token");
   return res.status(404).json({ msg: error.message });
}

next();
};

module.exports = checkAuth;