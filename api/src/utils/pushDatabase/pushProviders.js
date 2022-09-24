const { Provider } = require('../../db.js');
const json = require('./preloadDB/provider.json');

function pushProviders(){
    try {
        for(let prop in json) {
            json[prop].forEach( obj => {
                Provider.create(obj)         
            })
        }
    } catch (error) {
        console.log('No se cargaron los provedores')
    }
}

module.exports = pushProviders;