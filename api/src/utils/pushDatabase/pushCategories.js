const { Category } = require('../../db.js');
const db = require('./preloadDB/product.json');


let cat = Object.keys(db);


function pushCategories () {
    cat.forEach((c) =>  Category.create({name: c}) );
};

module.exports = pushCategories;
