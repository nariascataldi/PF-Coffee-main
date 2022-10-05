const { Router } = require('express');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { User } = require("../db");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

const checkAuth = require("../middlewares/checkAuth");

const { productsGet,
        prodIDget,
        dietsGet,
        categoriesGet,
        commentGet,
        prodIDremove,
        prodPost,
        providerPost,
        providersGet,
        providerIDget,
        altAttribute,
        commentPost,
        orderPost,
        ordersGet,
        usersGet,
        userAlt,
        providerAlt,
        providerIDremove,
        userIDremove,
        userIDget,
        mailPost,
        mailGet,
        ofertPost,
        ofertsGet  } = require('../controllers');
const checkoutControllers = require('../utils/CheckOut/checkoutControllers');

const {
  userRegist,
  userLogin,
  confirm,
  forgetPassword,
  checkToken,
  newPass,
  profile
} = require("../controllers/authControllers.js");

// import * as ctrls from '../controllers ---> ej: ctrls.productGet   (babel)

const router = Router();


//---------------GET

router.get('/products', productsGet);  // ruta probada !!!!!! --

router.get('/products/:id', prodIDget);   // ruta probada !!!!!! --

router.get('/diets', dietsGet);     // ruta probada !!!!!! --

router.get('/categories', categoriesGet);    // ruta probada !!!!!! --

router.get('/comment', commentGet)   // ruta probada !!!!!! --

router.get('/providers', providersGet);    // ruta probada !!!!!! --

router.get('/providers/:id', providerIDget);      // ruta probada !!!!!! -- middlewareAdmin,

router.get('/users', usersGet);    // ruta NO probada !!!!!! --

router.get('/orders', ordersGet);

router.get('/newsletter', mailGet);

router.get('/oferts', ofertsGet);

// router.get('/users/:id', userIDget);      // ruta NO probada !!!!!! --

// router.get('/orders', ordersGet);    // ruta NO probada !!!!!! --

// router.get('/orders/:id', orderIDget);      // ruta NO probada !!!!!! --

//---------------DELETE

router.delete('/products/remove', prodIDremove);  // ruta probada !!!!!! --

router.delete('/users/remove', providerIDremove);  // ruta  NO probada !!!!!! --

router.delete('/providers/remove', userIDremove);  // ruta NO probada !!!!!! --


//---------------POST

router.post('/products', prodPost);    // ruta probada !!!!!! -- middlewareAdmin,

router.post("/providers", providerPost);   // ruta probada !!!!!! -- middlewareAdmin,

router.post('/comment', commentPost);     // ruta probada !!!!!! -- middlewareAuth,

router.post('/orders', orderPost);

// router.post("/orders", middlewareAuth, orderPost);   // ruta NO probada !!!!!! --

router.post("/checkout", checkoutControllers.pago);    //ruta de mercado pago

router.post('/nwsletter', mailPost);

router.post('/oferts', ofertPost)

//---------------PUT

router.put('/products/:attribute', altAttribute);  // ruta probada !!!!!! -- middlewareAdmin,

router.put('/users/:attribute', userAlt);  // ruta  NO probada !!!!!! -- middlewareAdmin,

router.put('/providers/:attribute', providerAlt);  // ruta  NO probada !!!!!! -- middlewareAdmin,



/* -------------- Auth ---------------------*/
router.post('/users/registration', userRegist);               // ruta probada !!!!!! --

router.post('/users/login', userLogin);                       // ruta probada !!!!!! --

router.get("/users/confirm/:token", confirm);                // ruta probada !!!!!! --

//Es de tipo post porque el usuario va a enviar su email y comprobamos que ese email exista, en caso de que sea asi le enviamos un nuevo token
router.post("/users/forget-password", forgetPassword);       // ruta probada !!!!!! -- Olvide Password

//COMPUEBA QUE EL NVO TOKEN SEA VALIDO Y QUE EL USUARIO EXISTA
router.get("/users/forget-password/:token", checkToken);     // ruta probada !!!!!! --

router.post("/users/forget-password/:token", newPass);       // ruta probada !!!!!! --

//entra al endpoind, ejecuta el middeware y dsp ejecuta el perfil
router.get("/users/profile", checkAuth, profile);

//checkAuth => VERIFICA QUE EL JWT QUE SEA VALIDO, QUE EXISTA, QUE ESTE ENVIADO POR HEADER,
//SI TODO ESTA BIEN SE VA HACIA PROFILE
  
/* -------------- Auth ---------------------*/





const {Provider, Product} = require('../db')

router.put('/edit/:id', async (req,res)=>{
  try{
    const{id}=req.params;
    const {
      name,
      mail,
      logo,
      adress,
      phone,
      CUIT,
      disable
    } = req.body;

    const modifyProvider = await Provider.update({
      name,
      mail,
      logo,
      adress,
      phone,
      CUIT,
      disable
    },
    {where: {id}}
    );
    res.send(modifyProvider);
  }catch (err){
    console.log("El error del put es: ", err)
  }
})
router.put('/productsEdit/:id', async (req,res)=>{
  try{
    const{id}=req.params;
    const {
      title,
      price,
      description,
      image,
      disable,
      like,
      stock,
      sale_count,
      cost,
      margin,
      diets,
      categories,
      providers
    } = req.body;

    const modifyProduct = await Product.update({
      title,
      price,
      description,
      image,
      disable,
      like,
      stock,
      sale_count,
      cost,
      margin,
      diets,
      categories,
      providers
    },
    {where: {id}}
    );
    res.send(modifyProduct);
  }catch (err){
    console.log("El error del put es en product: ", err)
  }
})


router.post("/nodemailer", async (req, res) => {
  const { name, lastName, mail, pass, avatar, birthday } = req.body;
  const clientCreated = await User.create({
    name,
    lastName,
    mail,
    pass,
    avatar,
    birthday,
  });

  JSON.stringify(clientCreated);
  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "coffeeorder2022@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "Coffe´s <coffeeorder2022@gmail.com>",
        to: mail,
        subject: "🍩New message from your contact form🧁",
        html: `<a href="https://ibb.co/C7hLPnH">
                 <img src="https://i.ibb.co/R0z8jCD/mail.jpg" 
                      alt="mail" 
                      border="0">
                </a>`,
      };
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  sendMail()
  if(mail){
        await User.findOne({ where: { mail: mail } })
        res.status(200).send('Enviado')
  } else {
      const error = new Error("There is already a user with that email !!");
    return res.status(400).json({ msg: error.message})
  }
});


module.exports = router;

/*<a href="https://ibb.co/gR8F1Wx"></a> align="center" alt="Welcome" border="0"


<a href="https://ibb.co/gR8F1Wx"><img src="https://i.ibb.co/P6yzpWd/hot-sale-for-retail-with-pink-circle.jpg" alt="hot-sale-for-retail-with-pink-circle" border="0"></a>

<a href="https://ibb.co/C7hLPnH"><img src="https://i.ibb.co/R0z8jCD/mail.jpg" alt="mail" border="0"></a>
*/