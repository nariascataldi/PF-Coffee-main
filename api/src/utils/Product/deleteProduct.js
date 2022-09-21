const { Product } = require('../../db.js');

async function deleteProduct(id) {

		let productOver = await Product.findByPk(id)

		Product.destroy({
		where: { id: id },
		force: true
		})
		.then( (r)=> console.log(' borro el producto') )
		.catch( (e)=> console.log('deleteProduct: ', e.message) );

		return productOver;

};

module.exports = deleteProduct;
