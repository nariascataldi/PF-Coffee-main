const { Diet } = require('../../db.js');

let diets = [ "gluten free", "sugar free", "vegan", "lacto vegetarian" ];

function pushDiets () {
  diets.forEach((d) =>  Diet.create({ name: d }) );
};

module.exports  = pushDiets;
 
