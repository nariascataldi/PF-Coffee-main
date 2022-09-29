const { User } = require('../../db.js');

async function altUser(id, attribute, value) {
	
	if (attribute === 'name' || attribute === 'lastName') {
		if (value.includes(' ')) {
			value = value.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
		} else { value = value[0].toUpperCase().concat(value.slice(1).toLowerCase()) };
	};
    
    if (attribute === 'disable') {
        value = JSON.parse(value)
    };

	let myProd = await User.findByPk(id)
		.then( (r)=>{ // console.log(r);
			r.update({[attribute]: value})     // 'actualizamos el atributo de la actividad'
			return r;
		})
		.catch( (e)=> console.log('falló en el cambio de atributo en altUser: ', e.message) );


	return myProd;
	
};

module.exports = altUser;
