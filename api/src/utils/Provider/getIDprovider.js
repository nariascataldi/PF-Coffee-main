const { Provider } = require('../../db.js');

async function getIdProvider(id) {
    try {
        let response = await Provider.findOne({
            where: {id: id}
        });
        return response
    } catch (error) {
        console.log('Fallo el pedido por ID de providers')
    }
};

module.exports = getIdProvider;