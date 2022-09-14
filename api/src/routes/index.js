const { Router } = require('express');
const {
  productsGet,
  prodIDget,
  dietsGet,
  categoriesGet,
  prodIDremove,
  prodPost,
  altAttribute,
  orderPost,
} = require("../controllers");


const router = Router();


router.get('/products', productsGet);  // ruta NO probada !!!!!! --

router.get('/products/:id', prodIDget);   // ruta NO probada !!!!!! --

router.get('/diets', dietsGet);     // ruta NO probada !!!!!! --

router.get('/categories', categoriesGet);    // ruta NO probada !!!!!! --

router.delete('/products/remove', prodIDremove);  // ruta NO probada !!!!!! --

router.post('/products', prodPost);    // ruta NO probada !!!!!! --

router.put('/products/:attribute', altAttribute);  // ruta NO probada !!!!!! --

router.post('/oder', orderPost)

module.exports = router;
