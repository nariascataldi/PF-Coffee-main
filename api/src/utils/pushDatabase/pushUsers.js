const { User } = require('../../db.js');
const json = require('./preloadDB/users.json');

function pushUsers(){
    try { User.bulkCreate(json)
        // json.forEach( obj => {
        //         User.create(obj)         
        //     })       
    } catch (error) {
        console.log('No se cargaron los usuarios')
    }
}

module.exports = pushUsers;