const { getDiets } = require('../utils/getDiets.js');
const { getCategories } = require('../utils/getCategories.js');
const { getComment } = require("../utils/Comment/getComment");
const getProducts = require('../utils/Product/getProducts.js');
const postProduct = require('../utils/Product/postProduct.js');
const postProvider = require('../utils/Provider/postProvider.js');
const { getProductsQy } = require('../utils/Product/getProductsQy.js');
const getIDproduct = require('../utils/Product/getIDproduct');
const altProduct = require('../utils/Product/altProduct');
const deleteProduct = require('../utils/Product/deleteProduct.js');
const postComment = require('../utils/Comment/postComment.js');
const getProviders = require('../utils/Provider/getProviders.js');
const getIdProvider = require('../utils/Provider/getIDprovider.js');
const getUsers = require('../utils/User/getUsers.js');
const { getUsersQy } = require('../utils/User/getUsersQy.js');
const postUser = require('../utils/User/postUser');
const addFavourite = require('../utils/addFavourite');


const productsGet = async (req, res, next) => {
  try {
    let { data } = req.query; console.log(data);
    if (!data) {
      let prdts = await getProducts() || [];
      console.log(prdts.length);
      return res.send(prdts)  //    petición   probada !!!!!! --
    };
    let response = await getProductsQy(data);
    if (response.length === 0) response = [{ msg: 'There are no products with that word in their title. Try another possible denomination' }];
    res.send(response)              //    petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const providersGet = async (req, res, next) => {
  try {
    const { name } = req.query;
    let providers = await getProviders();
    if (name) {
      const nameProvider = providers.filter(a => a.name.toLowerCase().includes(name.toLowerCase()));
      if (nameProvider.length) {
        res.send(nameProvider);
      } else {
        res.send("No se encontro ningun proveedor")
      }
    } else {
      return res.send(providers)
    }
  } catch (error) {
    next(error)
  }
};

const prodIDget = async (req, res, next) => {
  try {
    let { id } = req.params; console.log(id);
    let response = await getIDproduct(id) || {};
    res.send(response)              //    petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const providerIDget = async (req, res, next) => {
  try {
    let { id } = req.params;
    let response = await getIdProvider(id);
    res.send(response)
  } catch (error) {
    next(error)
  }
};

const prodPost = async (req, res, next) => {
  try {
    console.log('input en controllers API: ', req.body);
    let response = await postProduct(req.body) || {};
    res.send(response)   //    petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const dietsGet = async (req, res, next) => {
  try {
    let o = await getDiets() || [];
    res.send(o)            //   petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const categoriesGet = async (req, res, next) => {
  try {
    let o = await getCategories() || [];
    res.send(o)            //     petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const commentGet = async (req, res, next) =>{
  try {
    let comm = await getComment() || [];
    res.send(comm)
  } catch (error) {
    next(error)
  }
};

const altAttribute = async (req, res, next)=>{
	try {
		let { attribute } = req.params;
	  let { id, value } = req.query;
    let myAlt = {};
    console.log(id);  console.log(attribute); console.log(value);

    if (attribute === 'addFavourite') {
      myAlt = await addFavourite(id, attribute, value) || {};
		  res.send(myAlt)            // petición   probada !!!!!! --
    } else {
      myAlt = await altProduct(id, attribute, value) || {};
    };		                      // petición   probada !!!!!! --
		res.send(myAlt)            
	} catch (e) { next (e) }
}; 

const prodIDremove = async (req, res, next) => {
  try {
    let { id } = req.query;
    let response = await deleteProduct(id) || {};
    res.send(response)            // petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const providerPost = async(req, res, next) => {
  try {
    // console.log("input en controllers API: ", req.body);
    let response = await postProvider(req.body) || {};

    res.send(response);
  } catch (error) {
    next(error);
  }
}

const commentPost = async (req, res, next) => {
  try {
    // let {id_prod, stars, coment} = req.body;
    console.log("input en controllers API: ", req.body);
    let response = await postComment(req.body) || {};
  
    res.send(response); 
  } catch (error) {
    next(error);
  }
};

const userPost = async (req, res, next) => {
  try {
    // console.log("input en controllers API: ", req.body);
  let response = await postUser(req.body) || {};
  
    res.send(response); 
  } catch (error) {
    next(error);
  }
};


const usersGet = async (req, res, next) => {
  try {
    let { data } = req.query; console.log(data);
    if (!data) {
      let rdts = await getUsers() || [];
      console.log(rdts.length);
      return res.send(rdts)  //    petición NO  probada !!!!!! --
    };
    let response = await getUsersQy(data);
    if (response.length === 0) response = [{ msg: 'There are no users with that word in their title. Try another possible denomination' }];
    res.send(response)              //    petición NO  probada !!!!!! --
  } catch (e) { next(e) }
};

module.exports = {
  productsGet,
  prodIDget,
  prodPost,
  dietsGet,
  categoriesGet,
  commentGet,
  altAttribute,
  prodIDremove,
  providerPost,
  commentPost,
  providersGet,
  providerIDget,
  userPost,
  usersGet

}

  

