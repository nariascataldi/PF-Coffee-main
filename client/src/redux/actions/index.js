import axios from 'axios';
// import { json } from 'react-router-dom';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
export const GET_ALL_PROVIDERS = 'GET_ALL_PROVIDERS'
export const GET_PROVIDER_DETAIL = 'GET_PROVIDER_DETAIL'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_DIETS = 'GET_ALL_DIETS'
export const GET_DETAIL = "GET_DETAIL"
export const GET_BY_TITLE = 'GET_BY_TITLE'
export const POST_USER = 'POST_USER'
export const CONFIRM_ID = "CONFIRM_ID"
export const POST_PRODUCT = 'POST_PRODUCT'
export const SET_FILTER_STATE = 'SET_FILTER_STATE'
export const FILTER = 'FILTER'
export const POST_PROVIDERS = 'POST_PROVIDERS'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const FILL_CART = 'FILL_CART'
export const RESET_FILL_CART ='RESET_FILL_CART'
export const GET_CLOUDINARY_RESPONSE = 'GET_CLOUDINARY_RESPONSE'
export const CLEAR_CLOUDINARY_RESPONSE = 'CLEAR_CLOUDINARY_RESPONSE'
export const POST_COMMENT = 'POST_COMMENT'
export const GET_LOGIN = 'GET_LOGIN'
export const FILL_CART_LOCAL_S = 'FILL_CART_LOCAL_S'


export function getAllProducts() {
  return async function (dispatch) {
    const json = await axios.get('http://localhost:3001/products');
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: json.data
    })
  }
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data
      })
    }
    catch (error) {
      console.log("el error del detalle es: ", error)
    }
  }
};
export function clearDetail () {
  return {
    type: CLEAR_DETAIL
  }
};

export function getByTitle(payload) {
  return {
    type: GET_BY_TITLE,
    payload
  }
}
export function getProductDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/products/${id}`);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: json.data
    })
  }
};
export function getAllProviders() {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/providers`);
    return dispatch({
      type: GET_ALL_PROVIDERS,
      payload: json.data
    })
  }
};
export function getProviderDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/providers/${id}`);
    return dispatch({
      type: GET_PROVIDER_DETAIL,
      payload: json.data
    })
  }
};
export function getAllCategories() {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/categories`);
    return dispatch({
      type: GET_ALL_CATEGORIES,
      payload: json.data
    })
  }
};
export function getAllDiets() {
  return async function (dispatch) {
    try {
      var info = await axios.get('/diets', {}); 
      return dispatch({
        type: GET_ALL_DIETS,
        payload: info.data
      })
    } catch (error) {
      console.log(error);
    }
  }
};
export const postCloudinaryPhoto = (postData) => {
  return async (dispatch) => {
    const json = await axios.post('https://api.cloudinary.com/v1_1/drcjpfj7t/image/upload', postData)
    return dispatch({
      type: GET_CLOUDINARY_RESPONSE,
      payload: json.data
    })
  }
};
export const createProduct = (postData) => {
  return () => {
    axios.post('http://localhost:3001/products', postData)
      .then(response => {
        console.log(response.data)
      })
  }
};

export const postUser = (payload) => 
async (dispatch)=> {
  try {
    const { data } = await axios.post("http://localhost:3001/users/registration", payload)
    // .then(response => console.log(response))
    // .catch(error => console.log(error))
    return dispatch({
      type: POST_USER,
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
};

export const confirmId = id => async dispatch => {
  try {
    const response = await axios.get(`/confirm/${id}`)
    return dispatch ({
      type: CONFIRM_ID,
      payload: response.data
    })
  } catch (error) {
    console.log(error)
    
  }
}

export function postProduct(payload) {
  return async function () {
    console.log('actions postProduct ', { payload });
    const response = await axios.post('/products', payload);
    console.log({ response });
    return response;
  }
}


export function setFilterState(payload) {
  return {
    type: SET_FILTER_STATE,
    payload
  }
};
export function filter() {
  return {
    type: FILTER,
  }
};
export function setFillCart(payload){
  return {
    type: FILL_CART ,
    payload
  }
}
export function fillCartLocalS(payload){
  localStorage.setItem('productCart',JSON.stringify(payload))
  return {
    type: FILL_CART_LOCAL_S ,
    payload
  }
}
export function resetFillCart (payload) {
  return{
      type:RESET_FILL_CART,
      payload
  }
}
export function postProviders(payload){
  return async function(dispatch){
    const info= await axios.post('http://localhost:3001/providers', payload);
    return info;
  }

}
export const clearCloudinaryResponse = () => {
  return async function (dispatch) {
      dispatch({
          type: CLEAR_CLOUDINARY_RESPONSE
      })
  };
};


export const postComment = (postData) => {
  return () => {
    console.log('en actions: ', postData);
    axios.post('http://localhost:3001/comment', postData)
      .then(response => {
        console.log(response.data)
      })
  }
};
export function loginService(user) {
  return async function (dispatch) {
    const json = await axios.post('http://localhost:3001/login', user);
    return dispatch({
      type: GET_LOGIN,
      payload: json.data
    })
  }
};