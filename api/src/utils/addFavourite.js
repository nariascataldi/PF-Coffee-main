const { Product, User } = require('../db.js');


async function addFavourite(id, attribute, idUser) {
    try {
        if (attribute === 'addFavourite') {
            let myProd = await Product.findByPk(id);
            await myProd.addUser(idUser);
            let myUserc = User.findOne({
                // logging: console.log,
                where: { id: idUser },
                include: [ Product ] 
              });
            return myUserc;
        }        
    } catch (error) { console.log(error);}
    
};

module.exports = addFavourite;