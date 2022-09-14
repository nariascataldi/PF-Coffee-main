const { Provider } = require('../db.js');

let postProvider = async(obj) => {
    let { name, adress, phone, CUIT, logo, mail } = obj;

    if (name.includes(' ')) {
        name = name.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
      } else { name = name[0].toUpperCase().concat(name.slice(1).toLowerCase()) };

    let prov = await Provider.create({ name, adress, phone, CUIT, logo, mail });

    let provCreated = await Provider.findOne({
        where:{ name: provCreated.name}
    });
    return provCreated;
};

module.export = postProvider;