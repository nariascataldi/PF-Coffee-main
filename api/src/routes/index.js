const { Router } = require('express');

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



const router = Router();


//---------------GET

router.get('/products', productsGet);  // ruta probada !!!!!! --

router.get('/products/:id', prodIDget);   // ruta probada !!!!!! --

router.get('/diets', dietsGet);     // ruta probada !!!!!! --

router.get('/categories', categoriesGet);    // ruta probada !!!!!! --

router.get('/comment', commentGet)   // ruta probada !!!!!! --

router.get('/providers', providersGet);    // ruta probada !!!!!! --

router.get('/providers/:id', providerIDget);      // ruta probada !!!!!! --

router.get('/users', usersGet);    // ruta NO probada !!!!!! --

// router.get('/users/:id', userIDget);      // ruta NO probada !!!!!! --

// router.get('/orders', ordersGet);    // ruta NO probada !!!!!! --

// router.get('/orders/:id', orderIDget);      // ruta NO probada !!!!!! --

//---------------DELETE

router.delete('/products/remove', prodIDremove);  // ruta probada !!!!!! --

//---------------POST

router.post('/products', prodPost);    // ruta probada !!!!!! --

router.post("/providers", providerPost);   // ruta probada !!!!!! --

router.post('/comment', commentPost);     // ruta probada !!!!!! --

// router.post("/orders", orderPost);   // ruta NO probada !!!!!! --

router.post('/users', userPost);     // ruta NO probada !!!!!! --

router.post("/checkout", checkoutControllers.pago);    //ruta de mercado pago


//---------------PUT

router.put('/products/:attribute', altAttribute);  // ruta probada !!!!!! --






module.exports = router;
