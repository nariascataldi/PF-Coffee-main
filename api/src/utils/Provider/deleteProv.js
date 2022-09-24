const { Provider } = require('../../db.js');

async function deleteProv(id) {

		let overProv = await Provider.findByPk(id)

		Provider.destroy({
		where: { id: id },
		force: true
		})
		.then( (r)=> console.log(' borro el usuario') )
		.catch( (e)=> console.log('deleteProv: ', e.message) );

		return overProv;

};

module.exports = deleteProv;
