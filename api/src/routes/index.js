const { Router } = require('express');

const { Provider, Product, User } = require("../db");
const nodemailer = require("nodemailer");

// const checkAuth = require("../middlewares/checkAuth");

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
  stockPut,
  mailPost,
  mailGet,
  ofertPost,
  ofertsGet } = require('../controllers');

const checkoutControllers = require('../utils/CheckOut/checkoutControllers');


const {
  userRegist,
  userLogin,
  confirm,
  forgetPassword,
  checkToken,
  newPass,
  nodemailerPost,
} = require("../controllers/authControllers.js");

const router = Router();


//---------------GET

router.get('/products', productsGet);  // ruta probada !!!!!! --

router.get('/products/:id', prodIDget);   // ruta probada !!!!!! --

router.get('/diets', dietsGet);

router.get('/categories', categoriesGet);

router.get('/comment', commentGet)

router.get('/providers', providersGet);

router.get('/providers/:id', providerIDget);

router.get('/users', usersGet);

router.get('/orders', ordersGet);

router.get('/newsletter', mailGet);

router.get('/oferts', ofertsGet);


//---------------DELETE

router.delete('/products/remove', prodIDremove);

router.delete('/users/remove', providerIDremove);

router.delete('/providers/remove', userIDremove);


//---------------POST

router.post('/products', prodPost);

router.post("/providers", providerPost);

router.post('/comment', commentPost);

router.post('/orders', orderPost);

router.post("/checkout", checkoutControllers.pago);

router.post('/newsletter', mailPost);

router.post('/oferts', ofertPost)

router.post("/nodemailer", nodemailerPost);


//---------------PUT

router.put('/products/:attribute', altAttribute);

router.put('/users/:attribute', userAlt);

router.put('/providers/:attribute', providerAlt);

router.put('/editStock', stockPut);


/* -------------- Auth ---------------------*/
router.post('/users/registration', userRegist);

router.post('/users/login', userLogin);

router.get("/users/confirm/:token", confirm);

router.post("/users/forget-password", forgetPassword);

router.get("/users/forget-password/:token", checkToken);

router.post("/users/forget-password/:token", newPass);

// router.get("/users/profile", checkAuth, profile);

/* -------------- Auth ---------------------*/


const getUserId = async (id) => {
  try {
    if (id) {
      const db = await User.findByPk(id)
      return {
        name: db.name,
        id: db.id,
        lastName: db.lastName,
        avatar: db.avatar.toString(),
        birthday: db.birthday,
        status: db.status,
        mail: db.mail,
        confirm: db.confirm,
        disable: db.disable,
        basket: db.basket,
        token: db.token

      }
    }

  } catch (error) { console.log('el error del id es: ', error) }
}

router.get('/getUserId/:id', async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      let userId = await getUserId(id)
      userId ?
        res.status(200).send(userId) :
        res.status(404).send('user no encontrado')
    }
  } catch (error) { console.log('El error del user id es: ', error) }
})



router.put('/mUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      lastName,
      avatar,
      birthday,
      status,
      mail,
      confirm,
      disable,
      basket,
      token

    } = req.body;

    const modifyUser11 = await User.update({
      name,
      lastName,
      avatar,
      birthday,
      status,
      mail,
      confirm,
      disable,
      basket,
      token
    },
      { where: { id } }
    );
    res.send(modifyUser11);
  } catch (err) {
    console.log("El error del put user es: ", err)
  }
})

router.put('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
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
      { where: { id } }
    );
    res.send(modifyProvider);
  } catch (err) {
    console.log("El error del put provider es: ", err)
  }
})
router.put('/productsEdit/:id', async (req, res) => {
  try {
    const { id } = req.params;
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
      { where: { id } }
    );
    res.send(modifyProduct);
  } catch (err) {
    console.log("El error del put es en product: ", err)
  }
})



module.exports = router;


