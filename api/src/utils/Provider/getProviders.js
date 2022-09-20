const { Provider } = require('../../db.js');

async function getProviders() {
    let providers = await Provider.findAll();
    return providers;
};

module.exports = getProviders;