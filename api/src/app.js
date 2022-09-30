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

server.use('/', routes);


//---Auth----------------------------------------------------------------


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

//------------------------

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;