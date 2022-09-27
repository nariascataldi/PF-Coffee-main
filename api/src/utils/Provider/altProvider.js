const { Provider } = require('../../db.js');

async function altProvider(id, attribute, value) {
	
	if (attribute === 'name') {
		if (value.includes(' ')) {
			value = value.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
		} else { value = value[0].toUpperCase().concat(value.slice(1).toLowerCase()) };
	};
	if (attribute === 'disable') {
        value = JSON.parse(value)
    };

	let myProv = await Provider.findByPk(id)
		.then( (r)=>{ // console.log(r);
			r.update({[attribute]: value})     // 'actulizamos el atributo'
			return r;			
		})
		.catch( (e)=> console.log('falló en el cambio de atributo en altProvider: ', e.message) );

        
	return myProv;
	
};

module.exports = altProvider;
