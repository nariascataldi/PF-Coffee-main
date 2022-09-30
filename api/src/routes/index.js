const { Router } = require('express');
const session = require('express-session');

// const middlewareAuth = require('../middlewares/middlewareAuth');
// const middlewareAdmin = require('../middlewares/middlewareAdmin');

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

const users = [
  { id: 1, name: 'Franco', email: 'Franco@mail.com', password: '1234' },
  { id: 2, name: 'Toni', email: 'Toni@mail.com', password: '1234' }
]
//--middleware propios Authenticated-------
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/auth/login');
  } else {
    next();
  }
}

const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/auth/home');
  } else {
    next();
  }
}
//----------------------------------------

//---Auth----------------------------------------------------------------

//Para poder parsear el middleware
router.use(express.urlencoded({ extended: true }));

router.use(session(
  {
    name: 'sid',
    secret: 'secret', // Debería estar en un archivo de environment
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2 // Está en milisegundos --> 2hs
    }
  }
));

router.use((req, res, next) => {
  console.log(req.session);
  next();
});

//------------------------

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
  
/* -----------------------------------*/

//---Auth----------------------------------------------------------------

router.get('/auth', (req, res) => {
  const { userId } = req.session;

  res.send(`
    <h1>Bienvenidos a Henry!</h1>
    ${userId ? `
      <a href='/auth/home'>Perfil</a>
      <form method='post' action='/auth/logout'>
        <button>Salir</button>
      </form>
      ` : `
      <a href='/auth/login'>Ingresar</a>
      <a href='/auth/register'>Registrarse</a>
      `}
  `)
});

router.get('/auth/home', redirectLogin, (req, res) => {
  //obtener el usuario correspondiente del array 'users' tomando como referencia el id de usuario almacenado en la cookie
  const user = users.find(user => user.id === req.session.userId);

  res.send(`
    <h1>Bienvenido ${user.name}</h1>
    <h4>${user.email}</h4>
    <a href='/auth'>Inicio</a>
  `)
});

router.get('/auth/login', redirectHome, (req, res) => {
  res.send(`
    <h1>Iniciar sesión</h1>
    <form method='post' action='/auth/login'>
      <input type='email' name='email' placeholder='Email' required />
      <input type='password' name='password' placeholder='Contraseña' required />
      <input type='submit' />
    </form>
    <a href='/auth/register'>Registrarse</a>
  `)
});

router.get('/auth/register', redirectHome, (req, res) => {
  res.send(`
    <h1>Registrarse</h1>
    <form method='post' action='/auth/register'>
      <input name='name' placeholder='Nombre' required />
      <input type='email' name='email' placeholder='Email' required />
      <input type='password' name='password' placeholder='Contraseña' required />
      <input type='submit' />
    </form>
    <a href='/auth/login'>Iniciar sesión</a>
  `)
});

router.post('/auth/login', redirectHome, (req, res) => {
  // 1) Obtener el email y password desde el body del request
  const { email, password } = req.body;
  // 2) Verificar que ambos datos hayan sido provistos
  // Si ambos datos fueron provistos:
  //   a) Obtener del listado de usuarios (si existe) el que tenga dicho email y contraseña
  //   b) Guardar los datos del usuario en la cookie: res.cookie('userId', user.id) donde el primer
  //   parámetro es el nombre de la cookie y el segundo su valor
  //   c) Redirigir a /home
  // En el caso de que no exista un usuario con esos datos o directamente no se hayan provisto o
  // el email o la password, redirigir a /login
  if (email && password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      req.session.userId = user.id;
      return res.redirect('/auth/home')
    }
  }

  res.redirect('/auth/login')
});

router.post('/auth/register', redirectHome, (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    const exists = users.some(user => user.email === email);
    if (!exists) {
      const user = {
        id: users.length + 1,
        name,
        email,
        password
      }
      users.push(user);
      return res.redirect('/auth');
    }
  }

  res.redirect('/auth/register')
});

router.post('/auth/logout', redirectLogin, (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.redirect('/auth/home');
    }
    res.clearCookie('sid');
    res.redirect('/auth');
  })
});

//-----------------------------------------------------------



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
