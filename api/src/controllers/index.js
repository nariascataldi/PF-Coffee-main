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
const altProvider = require('../utils/Provider/altProvider');
const altUser = require('../utils/User/altUser');
const deleteProv = require('../utils/Provider/deleteProv');
const deleteUser = require('../utils/User/deleteUser');
const postOrder = require('../utils/Order/postOrder');
const getOrders = require('../utils/Order/getOrders.js');
const editStock = require('../utils/Stock/editStock');
const postMail = require('../utils/postMail')
const getMail = require('../utils/getMail')
const postOfert = require('../utils/Ofert/postOfert')
const getOferts = require('../utils/Ofert/getOfert')



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

const ordersGet = async (req, res, next) => {
  try {
    let ords = await getOrders() || [];
    console.log(ords.length);
    return res. send(ords)
  } catch (error) {
    next(error)
  }
};

const ofertsGet = async (req, res, next) => {
  try {
    let ofs = await getOferts() || [];
    return res. send(ofs)
  } catch (error) {
    next(error)
  }
}

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

const ofertPost = async (req, res, next) => {
  try {
    console.log('input en controllers API: ', req.body);
    let response = await postOfert(req.body) || {};
    res.send(response)   //    petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const orderPost = async (req, res, next) => {
  try {
    console.log('input en controllers API: ', req.body);
    let response = await postOrder(req.body) || {};
    res.send(response)   //    petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const stockPut = async (req, res, next) => {
  try {
    let response = await editStock(req.body) || {};
    res.send(response)
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

const userAlt = async (req, res, next)=>{
	try {
		let { attribute } = req.params;
	  let { id, value } = req.query;
 
    console.log(id);  console.log(attribute); console.log(value);
    let myAlt = await altUser(id, attribute, value) || {};
    
		res.send(myAlt)            
	} catch (e) { next (e) }
}; 

const providerAlt = async (req, res, next)=>{
	try {
		let { attribute } = req.params;
	  let { id, value } = req.query;
 
    console.log(id);  console.log(attribute); console.log(value);
    let myAlt = await altProvider(id, attribute, value) || {};
    
		res.send(myAlt)            
	} catch (e) { next (e) }
}; 

const providerIDremove = async (req, res, next) => {
  try {
    let { id } = req.query;
    let response = await deleteProv(id) || {};
    res.send(response)            // petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const userIDremove = async (req, res, next) => {
  try {
    let { id } = req.query;
    let response = await deleteUser(id) || {};
    res.send(response)            // petición   probada !!!!!! --
  } catch (e) { next(e) }
};

const mailPost = async (req, res, next) => {
    try {
      let response = await postMail(req.body) || {};

      res.send(response);
    } catch (error) {
      next(error);
    }
};

const mailGet = async (req, res, next) => {
  try {
    let mail = await getMail() || [];
    console.log(mail.length);
    return res.send(mail);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  productsGet,
  prodIDget,
  prodPost,
  orderPost,
  ordersGet,
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
  usersGet,
  userAlt,
  providerAlt,
  userIDremove,
  providerIDremove,
  stockPut,
  mailPost,
  mailGet,
  ofertPost,
  ofertsGet
};


  

