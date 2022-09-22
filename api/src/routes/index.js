const { Router } = require('express');
// const middlewareAuth = require('../middlewareAuth');
// const middlewareAdmin = require('../middlewareAdmin');


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
        userPost,
        usersGet,
        userIDget  } = require('../controllers');
const checkoutControllers = require('../utils/CheckOut/checkoutControllers');

const { userRegist,
  userLogin } = require('../controllers/authControllers.js');

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

// router.get('/users/:id', userIDget);      // ruta NO probada !!!!!! --

// router.get('/orders', ordersGet);    // ruta NO probada !!!!!! --

// router.get('/orders/:id', orderIDget);      // ruta NO probada !!!!!! --

//---------------DELETE

router.delete('/products/remove', prodIDremove);  // ruta probada !!!!!! --

//---------------POST

router.post('/products', prodPost);    // ruta probada !!!!!! -- middlewareAdmin,

router.post("/providers", providerPost);   // ruta probada !!!!!! -- middlewareAdmin,

router.post('/comment', commentPost);     // ruta probada !!!!!! -- middlewareAuth,

// router.post("/orders", middlewareAuth, orderPost);   // ruta NO probada !!!!!! --

//----Validation

router.post('/users/registration', userRegist);     // ruta NO probada !!!!!! --

router.post('/users/login', userLogin);     // ruta NO probada !!!!!! --

router.post("/checkout", checkoutControllers.pago);    //ruta de mercado pago


//---------------PUT

router.put('/products/:attribute', altAttribute);  // ruta probada !!!!!! -- middlewareAdmin,






module.exports = router;
