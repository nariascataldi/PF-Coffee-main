const { Product } = require('../../db.js');

let editStock = async(obj)=>{
    try {
        let{ id , stock} = obj;
        const prod = await Product.update({
            stock: stock
        },{
            where: {id : id}
        })
        
        return prod
    } catch (error) {
        console.log(error)
    }
}

module.exports = editStock;