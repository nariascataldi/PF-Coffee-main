require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, FRONT, SECRET, DB_NAME } =
  process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
      });
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Category, Comment, Diet, Order, Product, Provider, User, Newsletter, Ofert } =
  sequelize.models;

// const { Product, Category } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Product.hasMany(Comment, {
  //foreignKey: "id_product"
});
Comment.belongsTo(Product);

User.hasMany(Order, {
  //foreignKey: "id_user"
});
Order.belongsTo(User);

User.hasMany(Comment, {
  //foreignKey: "id_user"
});
Comment.belongsTo(User);

Provider.hasMany(Order, {
  //foreignKey: "id_provider"
});
Order.belongsTo(Provider);

User.hasMany(Newsletter);

Newsletter.belongsTo(User);


Product.belongsToMany(Category, { through: "product_category"});
Category.belongsToMany(Product, { through: "product_category"});

Product.belongsToMany(Provider, { through: "product_provider"});
Provider.belongsToMany(Product, { through: "product_provider"});

Product.belongsToMany(Diet, { through: "diet_product"});
Diet.belongsToMany(Product, { through: "diet_product"});

Product.belongsToMany(Order, { through: "product_order"});
Order.belongsToMany(Product, { through: "product_order"});

Product.belongsToMany(User, { through: "favourite"});
User.belongsToMany(Product, { through: "favourite"});


Product.belongsToMany(Category, { through: "product_category" });
Category.belongsToMany(Product, { through: "product_category" });

Ofert.belongsToMany(Newsletter, { through: "ofert_newsletter" });
Newsletter.belongsToMany(Ofert, { through: "ofert_newsletter" });

Ofert.belongsToMany(Category, { through: "ofert_category" });
Category.belongsToMany(Ofert, { through: "ofert_category" });

Ofert.belongsToMany(Diet, { through: "ofert_diet" });
Diet.belongsToMany(Ofert, { through: "ofert_diet" });

Ofert.belongsToMany(User, { through: "ofert_user" });
User.belongsToMany(Ofert, { through: "ofert_user" });

Ofert.belongsToMany(Product, { through: "ofert_product" });
Product.belongsToMany(Ofert, { through: "ofert_product" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, 
  PORT, FRONT, SECRET,
  Op    // para importart la conexión { conn } = require('./db.js');
};
