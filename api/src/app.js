const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { FRONT } = require('./db.js');
const frontPort = FRONT || 3030;
const session = require('express-session');

// const cors = require("cors");

require('./db.js');

const server = express();

//CONFIGURACION CORS
// const whitelist = ["*"]; //DOMINIOS PERMITIDOS

// const corsOptions = {
//   origin: function(origin, callback){
//     if(whitelist.includes(origin)){
//   callback(null, true);
//   } else {
//   callback(new Error("Error de CORS"))
//     }
//   }
// };

// server.use(cors(corsOptions))

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
// El orden es importante, el cookieparser debe estar antes de la utilización del session
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes); // ¡ ver este !

//---Auth----------------------------------------------------------------

const users = [
  { id: 1, name: 'Franco', email: 'Franco@mail.com', password: '1234' },
  { id: 2, name: 'Toni', email: 'Toni@mail.com', password: '1234' }
]
//Para poder parsear el middleware
server.use(express.urlencoded({ extended: true }));

server.use(session(
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

server.use((req, res, next) => {
  console.log(req.session);
  next();
});

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
server.get('/auth', (req, res) => {
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

server.get('/auth/home', redirectLogin, (req, res) => {
  //obtener el usuario correspondiente del array 'users' tomando como referencia el id de usuario almacenado en la cookie
  const user = users.find(user => user.id === req.session.userId);

  res.send(`
    <h1>Bienvenido ${user.name}</h1>
    <h4>${user.email}</h4>
    <a href='/auth'>Inicio</a>
  `)
});

server.get('/auth/login', redirectHome, (req, res) => {
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

server.get('/auth/register', redirectHome, (req, res) => {
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

server.post('/auth/login', redirectHome, (req, res) => {
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

server.post('/auth/register', redirectHome, (req, res) => {
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

server.post('/auth/logout', redirectLogin, (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.redirect('/auth/home');
    }
    res.clearCookie('sid');
    res.redirect('/auth');
  })
});




// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;