const jwt = require('jsonwebtoken');
const { User } = require('../db');

const  middlewareAuth = (req, res, next) => { // eslint-disable-line no-unused-vars
    try {
      let tokenBis = null; 
    const authorization = req.get('authorization'); 
    const token = req.headers['x-access-token'];
    if (authorization === authorization.toLowerCase().startsWith('bearer')) {
      tokenBis = authorization.substring(7)
    };
    const decodeToken = jwt.verify(token, SECRET);    
  
    if (!token || !decodeToken.id || token !== tokenBis) {
      return res.status(403).json({error: 'token missing or invalid'})
    };
    const user = User.findByPk(decodeToken.id);

    if (!user) {  
      return res.status(403).json({error: 'user missing or invalid'})
    };    

    next();
    } catch (error) {
      res.status(404).json({error: 'Unauthorized'})
    }
};

  module.exports = middlewareAuth;