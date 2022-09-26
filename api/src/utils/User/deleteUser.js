const { User } = require('../../db.js');

async function deleteUser(id) {

		let overUser = await User.findByPk(id)

		User.destroy({
		where: { id: id },
		force: true
		})
		.then( (r)=> console.log(' borro el usuario') )
		.catch( (e)=> console.log('deleteUser: ', e.message) );

		return overUser;

};

module.exports = deleteUser;
