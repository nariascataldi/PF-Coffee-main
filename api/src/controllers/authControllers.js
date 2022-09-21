const jwt = require('jsonwebtoken');
const  bcrypt  = require('bcryptjs');
const { User, SECRET } = require('../db.js');



const userRegist = async(obj)=>{
   
    let { name, lastName, status, mail, pass, avatar, birthday } = obj;

    let salt = await bcrypt.genSalt(10);
    pass = await bcrypt.hash(pass, salt);
  
    let userCreate = await User.create({ name, lastName, status, mail, pass, avatar, birthday, });
    
    const userForToken = {
        username: userCreate.mail,
        id: userCreate.id
    };
    const token = jwt.sign(
        userForToken, 
        SECRET,
        { expiresIn: 86400 } //---> un día // 60 * 60 * 24 * 7 ---> una semana
    );

    return token;
  }
  

const userLogin = async(req,res,next)=>{

    const { username, password } = req.body;
    const user = await User.findOne({ where: {mail: username} });

    const passwordContext = user === null ? 
        false : await bcrypt.compare(password, user.pass);
    
    if (!(user && passwordContext)) {
        res.status(401).json({error:'invalid user or password'})
    };
    const userForToken = {
        username: user.mail,
        id: user.id
    };
    const token = jwt.sign(
        userForToken, 
        SECRET,
        {expiresIn: 60 * 60 * 24 * 7}
    );

    res.send({
        username: user.username,
        name: user.name,
        token
    })
};

module.exports = {
    userRegist,
    userLogin
};