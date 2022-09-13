const { Router } = require('express');
const { productsGet,
        prodIDget,
        dietsGet,
        categoriesGet,
        prodIDremove,
        prodPost,
        altAttribute  } = require('../controllers');


const router = Router();


router.get('/products', productsGet);  // ruta NO probada !!!!!! --

router.get('/product/:id', prodIDget);   // ruta NO probada !!!!!! --

router.get('/diets', dietsGet);     // ruta NO probada !!!!!! --

router.get('/categories', categoriesGet);    // ruta NO probada !!!!!! --

router.delete('/product/remove', prodIDremove);  // ruta NO probada !!!!!! --

router.post('/product', prodPost);    // ruta NO probada !!!!!! --

router.put('/product/:attribute', altAttribute);  // ruta NO probada !!!!!! --



module.exports = router;
