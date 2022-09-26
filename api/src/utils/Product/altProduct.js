const { Product } = require('../../db.js');

async function altProduct(id, attribute, value) {
	
	if (attribute === 'title') {
		if (value.includes(' ')) {
			value = value.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
		} else { value = value[0].toUpperCase().concat(value.slice(1).toLowerCase()) };
	};
	if (attribute === 'disable') {
        value = JSON.parse(value)
    };

	let myProd = await Product.findByPk(id)
		.then( (r)=>{ // console.log(r);
			if (attribute === 'like' && r.like) {  
					value = parseInt(value) + parseInt(r.like);
			};
			r.update({[attribute]: value})     // 'actulizamos el atributo de la actividad'
			return r;
		})
		.catch( (e)=> console.log('falló en el cambio de atributo en altProduct: ', e.message) );


	return myProd;
	
};

module.exports = altProduct;
