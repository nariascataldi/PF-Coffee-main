const { Router } = require('express');
const { productsGet,
        prodIDget,
        dietsGet,
        categoriesGet,
        prodIDremove,
        prodPost,
        providerPost,
        altAttribute  } = require('../controllers');


const router = Router();


router.get('/products', productsGet);  // ruta NO probada !!!!!! --

router.get('/products/:id', prodIDget);   // ruta NO probada !!!!!! --

router.get('/diets', dietsGet);     // ruta NO probada !!!!!! --

router.get('/categories', categoriesGet);    // ruta NO probada !!!!!! --

router.delete('/products/remove', prodIDremove);  // ruta NO probada !!!!!! --

router.post('/products', prodPost);    // ruta NO probada !!!!!! --

router.post('/providers', providerPost);   //ruta no funciona, revisar!!

router.put('/products/:attribute', altAttribute);  // ruta NO probada !!!!!! --



module.exports = router;
