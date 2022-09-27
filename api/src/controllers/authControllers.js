const jwt = require('jsonwebtoken');
const  bcrypt  = require('bcryptjs');
const { User, SECRET } = require('../db.js');
const emailRegister = require('../helper/emails.js');


const userRegist = async (req, res) => {
  let { name, lastName, status, mail, pass, avatar, birthday } = req.body;
  console.log("body", req.body.mail);

  const prevUser = await User.findOne({ where: { mail: mail } });

  if(prevUser){
    const error = new Error("There is already a user with that email !!");
    return res.status(400).json({ msg: error.message})
  }
  // if (prevUser && prevUser.hasOwnProperty("id")) {
  //   return res
  //     .status(401)
  //     .json({ error: "There is already a user with that email !!" });
  // }
  let salt = await bcrypt.genSalt(10);
  pass = await bcrypt.hash(pass, salt);

  let userCreate = await User.create({
    name,
    lastName,
    status,
    mail,
    pass,
    avatar,
    birthday
  });

    const userForToken = {
    username: userCreate.mail,
    id: userCreate.id,
  };
  const generaToken = jwt.sign(
    userForToken,
    SECRET,
    { expiresIn: 86400 } //---> un día // 60 * 60 * 24 * 7 ---> una semana
  );

  userCreate.token = generaToken;
  const userStored = await userCreate.save();
  res.json(userStored)

  //   emailRegister({
  //     name: userCreate.name,
  //     lastName: userCreate.lastName,
  //     status: userCreate.status,
  //     mail: userCreate.mail,
  //     pass: userCreate.pass,
  //     avatar: userCreate.avatar,
  //     birthday: userCreate.birthday,
  //     token: userCreate.token,
  //   });
  // res.send({ token });
};
  

const userLogin = async(req,res)=>{

    const { username, password } = req.body;
    const user = await User.findOne({ where: { mail: username } });

    const passwordContext = (user === null) ? 
        false : await bcrypt.compare(password, user.pass);
    
    if (!(user && passwordContext)) {
       return res.status(401).json({error:'invalid user or password'})
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
        username: user.mail,
        name: user.name,
        token
    })
};

const confirm = async (req, res) => {

  const { token } = req.params;

  const userConfirm = await User.findOne({ where: { token: token } });

  //si no existe token
  if(!userConfirm) {
  const error = new Error("Token no valido")
  return res.status(403).json({msg: error.message}) 
  }

  try {
  //si existe confirmamos al usuario
  userConfirm.confirm = true
  
  //se elimina xq el Token es de un solo uso se elimina despues
  userConfirm.token = "";
  //almacena los datos actualizados del usuario
  await userConfirm.save();
  res.json({ msg: "User confirmed successfully" });

  } catch (error) {
    console.log(error)
  }
}

const forgetPassword = async (req, res) => {
  const { mail } = req.body
  const user = await User.findOne({ where: { mail: mail } });
  if (!user) {
    const error = new Error("Username does not exist");
    return res.status(404).json({ msg: error.message });
  }

try {
    const userForToken = {
      username: user.mail,
      id: user.id,
    };
    const generaToken = jwt.sign(
      userForToken,
      SECRET,
      { expiresIn: 86400 } //---> un día // 60 * 60 * 24 * 7 ---> una semana
    );

    //generar un nuevo token si lo olvida
    user.token = generaToken;
    await user.save();
     res.json({ msg: "Email sent with instructions" });

} catch (error) {
  console.log(error)
  
}
};

const checkToken = async (req, res) => {

  const { token } = req.params;

  //validar que el token exista en alguno de los usuarios de nuestra BD
  const tokenValid = await User.findOne({ where: { token: token } });

  //validaddo el token cuando el usuario quiere cambiar su password
  if(tokenValid){
    res.json({ msg: "Valid token and user exists" });
  } else {
   const error = new Error("Invalid token");
   return res.status(404).json({ msg: error.message });
  }
};

//Almacenando el nuevo password
const newPass = async (req, res) => {

  const { token } = req.params;
  const { pass } = req.body;

  //verifico el token
  const user = await User.findOne({ where: { token: token } });

  if(user){
   user.pass = pass; //pass hasheada??

   //reseteamos en token
   user.token = ""
  
   try {
     await user.save();
     res.json({ msg: "Changed password" });
   } catch (error) {
    console.log(error)
  }

  } else {
   const error = new Error("Invalid token");
   return res.status(404).json({ msg: error.message });
  }
};

const profile = async (req, res) => {
console.log('desde perfil..')
}
 

module.exports = {
  userRegist,
  userLogin,
  confirm,
  forgetPassword,
  checkToken,
  newPass, 
  profile
};