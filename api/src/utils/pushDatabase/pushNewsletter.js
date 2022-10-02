const { Newsletter } = require('../../db.js');
const json = require('./preloadDB/newsletter.json');

function pushNewsletter(){
    try { Newsletter.bulkCreate(json)
        // json.forEach( obj => {
        //         User.create(obj)         
        //     })       
    } catch (error) {
        console.log('No se cargaron los usuarios')
    }
}

module.exports = pushNewsletter;