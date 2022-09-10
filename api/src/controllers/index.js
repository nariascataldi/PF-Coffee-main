const { getDiets } = require('../utils/getDiets.js');
const { getCategories } = require('../utils/getCategories.js');
const  getProducts  = require('../utils/getProducts.js');
const  postProduct  = require('../utils/postProduct.js');
const { getProductsQy } = require('../utils/getProductsQy.js');
const getIDproduct = require('../utils/getIDproduct');
const altProduct = require('../utils/altProduct');
const deleteProduct = require('../utils/deleteProduct.js');

const productsGet = async(req, res, next)=>{
  try {
    let { data } = req.query;  console.log(data);
    if (!data) {
      let prdts = await getProducts() || [];
      console.log(prdts.length);
      return res.send(prdts)  //    petición NO  probada !!!!!! --
    };
    let response = await getProductsQy(data);
    if (response.length === 0) response = [{msg: 'There are no products with that word in their title. Try another possible denomination'}];
    res.send(response)              //    petición NO  probada !!!!!! --
  } catch (e) { next(e) }
};

const prodIDget = async(req, res, next)=>{
  try {
    let { id } = req.params; console.log(id);
    let response = await getIDproduct(id) || {};
    res.send(response)              //    petición NO  probada !!!!!! --
  } catch (e) { next(e) }
};

const prodPost = async(req, res, next)=>{
  try {
    console.log('input en controllers API: ',req.body);
    let response = await postProduct(req.body) || {};
    res.send(response)   //    petición NO  probada !!!!!! --
  } catch (e) { next(e) }
};

const dietsGet = async(req, res, next)=>{
  try {
    let o = await getDiets() || [];
    res.send(o)            //   petición NO  probada !!!!!! --
  } catch (e) { next(e) }
};

const categoriesGet = async(req, res, next)=>{
  try {
    let o = await getCategories() || [];
    res.send(o)            //     petición NO  probada !!!!!! --
  } catch (e) { next(e) }
};

const altAttribute = async (req, res, next)=>{
	try {
		let { attribute } = req.params;
	  let { id, value } = req.query;
    
    console.log(id);  console.log(attribute); console.log(value);
    
		let myAlt = await altProduct(id, attribute, value) || {};
		res.send(myAlt)            // petición NO  probada !!!!!! --
	} catch (e) { next (e) }
};

const prodIDremove = async (req, res, next)=>{
	try {
	  let { id } = req.query;
		let response = await deleteProduct(id) || {};
		res.send(response)            // petición NO  probada !!!!!! --
	} catch (e) { next (e) }
};

module.exports = {
  productsGet,
  prodIDget,
  prodPost,
  dietsGet,
  categoriesGet,
  altAttribute,
  prodIDremove
}
