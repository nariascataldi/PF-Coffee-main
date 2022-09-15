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
        commentPost  } = require('../controllers');



const router = Router();


router.get('/products', productsGet);  // ruta probada !!!!!! --

router.get('/products/:id', prodIDget);   // ruta probada !!!!!! --

router.get('/diets', dietsGet);     // ruta probada !!!!!! --

router.get('/categories', categoriesGet);    // ruta probada !!!!!! --

router.get('/comment', commentGet)   // ruta probada !!!!!! --

router.get('/providers', providersGet);    // ruta probada !!!!!! --

router.get('/providers/:id', providerIDget);      // ruta probada !!!!!! --

router.delete('/products/remove', prodIDremove);  // ruta probada !!!!!! --

router.post('/products', prodPost);    // ruta probada !!!!!! --

router.post("/provider", providerPost);   // ruta probada !!!!!! --

router.post('/comment', commentPost);     // ruta probada !!!!!! --

router.put('/products/:attribute', altAttribute);  // ruta probada !!!!!! --





module.exports = router;
