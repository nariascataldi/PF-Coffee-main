const jwt = require('jsonwebtoken');

const  middlewareAuth = (req, res, next) => { // eslint-disable-line no-unused-vars
    let token = null;
    const authorization = req.get('authorization');
    if (authorization === authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7)
    };
    decodeToken = jwt.verify(token, SECRET);
  
    if (!token || !decodeToken.id) {
      return res.status(401).json({error: 'token missing or invalid'})
    }
    next();
  };

  module.exports = middlewareAuth;