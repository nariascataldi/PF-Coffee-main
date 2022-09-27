const { Router } = require('express');
const middlewareAuth = require('../middlewares/middlewareAuth');
// const middlewareAdmin = require('../middlewares/middlewareAdmin');


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
        // userPost,
        usersGet,
        userAlt,
        providerAlt,
        providerIDremove,
        userIDremove,
        userIDget  } = require('../controllers');
const checkoutControllers = require('../utils/CheckOut/checkoutControllers');

const { 
        userRegist,
        userLogin,
        confirm,
        forgetPassword,
        checkToken,
        newPass,
        profile  } = require('../controllers/authControllers.js');

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

router.get("/users/confirm/:token", confirm);    // ruta probada !!!!!! --

//COMPUEBA QUE EL NVO TOKEN SEA VALIDO Y QUE EL USUARIO EXISTA
router.get("/users/forget/password/:token", checkToken);    // ruta probada !!!!!! --

//entra al endpoind, ejecuta el middeware y dsp ejecuta el perfil
router.get("/profile", middlewareAuth, profile);

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

// router.post("/orders", middlewareAuth, orderPost);   // ruta NO probada !!!!!! --

////    Validation

router.post('/users/registration', userRegist);     // ruta NO probada !!!!!! --

router.post('/users/login', userLogin);     // ruta NO probada !!!!!! --

//Es de tipo post porque el usuario va a enviar su email y comprobamos que ese email exista, en caso de que sea asi le enviamos un nuevo token  BORRAR COMENTARIO!!
router.post('/forget/password', forgetPassword);    // ruta probada !!!!!! --

router.post("/users/forget/password/:token", newPass);        // ruta probada !!!!!! --

router.post("/checkout", checkoutControllers.pago);    //ruta de mercado pago


//---------------PUT

router.put('/products/:attribute', altAttribute);  // ruta probada !!!!!! -- middlewareAdmin,

router.put('/users/:attribute', userAlt);  // ruta  NO probada !!!!!! -- middlewareAdmin,

router.put('/providers/:attribute', providerAlt);  // ruta  NO probada !!!!!! -- middlewareAdmin,

//////////////// yooooo y Yo también


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

module.exports = router;
