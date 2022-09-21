const jwt = require('jsonwebtoken');
const bcrypt = requiere('bcrypt');
const loginRouter = requiere('express').Router();
const { User, SECRET } = requiere('../../db.js');

loginRouter.post('/login', async(req,res,next)=>{
    const { username, password } = req.body;
    const user = await User.findOne({where:{username}});
    const passwordContext = user === null ? 
        false : await bcrypt.compare(password, user.password);
    
    if (!(user && passwordContext)) {
        res.status(401).json({error:'invalid user or password'})
    };
    const userForToken = {
        username: user.username,
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
})