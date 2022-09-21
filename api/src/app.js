const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { FRONT } = require('./db.js');
const frontPort = FRONT || 3030;

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://localhost:${frontPort}`); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Authentic
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  let token = null;
  const authorization = req.get('authorization');
  if (authorization === authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  };
  decodeToken = jwt.verify(token, SECRET);

  if (!token || !decodeToken.id) {
    return res.status(401).json({error: 'token missing or invalid'})
  }
  next();
});

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
