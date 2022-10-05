import axios from 'axios';
import { URL } from '../../config/Const';
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
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const CONFIRM_ID = "CONFIRM_ID"
export const POST_PRODUCT = 'POST_PRODUCT'
export const SET_FILTER_STATE = 'SET_FILTER_STATE'
export const FILTER = 'FILTER'
export const POST_PROVIDERS = 'POST_PROVIDERS'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const FILL_CART = 'FILL_CART'
export const RESET_FILL_CART = 'RESET_FILL_CART'
export const GET_CLOUDINARY_RESPONSE = 'GET_CLOUDINARY_RESPONSE'
export const CLEAR_CLOUDINARY_RESPONSE = 'CLEAR_CLOUDINARY_RESPONSE'
export const POST_COMMENT = 'POST_COMMENT'
export const GET_LOGIN = 'GET_LOGIN'
export const FILL_CART_LOCAL_S = 'FILL_CART_LOCAL_S'
export const SET_PROVIDERS = 'SET_PROVIDERS'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_STOCK = 'SET_STOCK'
export const POST_NEWSLETTER = 'POST_NEWSLETTER'
export const GET_ALL_NEWSLETTER = 'GET_ALL_NEWSLETTER'
export const CART_EMPTYING = 'CART_EMPTYING'
export const CHANGE_MAIL = 'CHANGE_MAIL'
export const POST_ORDER = "POST_ORDER"
export const SET_USER_INIT = 'SET_USER_INIT'
export const GET_ALL_ORDERS = "GET_ALL_ORDERS"
export const PUT_USER = "PUT_USER"
export const GET_USER_DETAIL = "GET_USER_DETAIL"
export const ORDER_BY_STOCK = "ORDER_BY_STOCK"
export const GET_ALL_OFERTS = 'GET_ALL_OFERTS'
export const RESET_FILTER ='RESET_FILTER'

export function getAllProducts() {
  return async function (dispatch) {
    const json = await axios.get(URL + '/products');
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: json.data
    })
  }
};

export function getAllUsers() {
  return async function (dispatch) {
    const json = await axios.get(URL + '/users');
    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data
    })
  }
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(URL + `/products/${id}`);
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
export function clearDetail() {
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
    const json = await axios.get(URL + `/products/${id}`);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: json.data
    })
  }
};

export function getUserDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(URL + `/getUserId/${id}`);//getUserId
    return dispatch({
      type: GET_USER_DETAIL,
      payload: json.data
    })
  }
};

export function getAllProviders() {
  return async function (dispatch) {
    const json = await axios.get(URL + `/providers`);
    return dispatch({
      type: GET_ALL_PROVIDERS,
      payload: json.data
    })
  }
};
export function getProviderDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(URL + `/providers/${id}`);
    return dispatch({
      type: GET_PROVIDER_DETAIL,
      payload: json.data
    })
  }
};
export function getAllCategories() {
  return async function (dispatch) {
    const json = await axios.get(URL + `/categories`);
    return dispatch({
      type: GET_ALL_CATEGORIES,
      payload: json.data
    })
  }
};
export function getAllOrders() {
  return async function (dispatch) {
    const json = await axios.get(URL + `/orders`);
    return dispatch({
      type: GET_ALL_ORDERS,
      payload: json.data
    })
  }
};
export function getAllNewsletter() {
  return async function (dispatch) {
    const json = await axios.get(URL + `/newsletter`);
    return dispatch({
      type: GET_ALL_NEWSLETTER,
      payload: json.data
    })
  }
};
export function getAllOferts() {
  return async function (dispatch) {
    const json = await axios.get(URL + `/oferts`);
    return dispatch({
      type: GET_ALL_OFERTS,
      payload: json.data
    })
  }
};
export function getAllDiets() {
  return async function (dispatch) {
    try {
      var info = await axios.get(URL + '/diets', {});
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
    axios.post(URL + '/products', postData)
      .then(response => {
        console.log(response.data)
      })
  }
};

export const postUser = (payload) =>{

      return axios.post(URL + '/users/registration', payload);
    
  };
export const postOrder = (payload) =>
async (dispatch) => {
  try {
    const response = await axios.post( URL + "/orders", payload)
    return dispatch({
      type: POST_ORDER,
      payload: response.data,
    })
  } catch (error) {
    console.log(error)
  }
};

export const confirmId = id => async dispatch => {
  try {
    const response = await axios.get(URL + `/confirm/${id}`)
    return dispatch({
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
    const response = await axios.post(URL + '/products', payload);
    console.log({ response });
    return response;
  }
}

export function postNewsletter(payload) {
  return async function () {
    const json = await axios.post(URL + '/newsletter', payload);
    return json
    
  }
}

export function postOferts(payload) {
  return async function () {
    const json = await axios.post(URL + '/oferts', payload);
    return json
  }
}

export function   postNodemailer(payload) {
  return axios.post(URL + '/nodemailer', {
    mail: payload
  });
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
export function resetFilter() {
  return {
    type: RESET_FILTER,
  }
};
export function changeMailArray(payload) {
  return {
    type: CHANGE_MAIL,
    payload
  }
};
export function setFillCart(payload) {
  return {
    type: FILL_CART,
    payload
  }
}
export function fillCartLocalS(payload) {
  localStorage.setItem('productCart', JSON.stringify(payload))
  return {
    type: FILL_CART_LOCAL_S,
    payload
  }
}
export function resetFillCart(payload) {
  return {
    type: RESET_FILL_CART,
    payload
  }
}
export function cartEmptying (){
  return {
    type:CART_EMPTYING
  }
}
// Usuario registrado
export function setUserInit(payload) {
  return {
    type: SET_USER_INIT,
    payload
  }
}

export function postProviders(payload) {
  return async function () {
    const info = await axios.post(URL + '/providers', payload);
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
    axios.post(URL + '/comment', postData)
      .then(response => {
        console.log(response.data)
      })
  }
};
export function loginService(user) {
  return async function (dispatch) {
    const json = await axios.post(URL + '/login', user);
    return dispatch({
      type: GET_LOGIN,
      payload: json.data
    })
  }
};

export function putProviders(data, id) {
  return async function (dispatch) {
    axios.put(URL + `/edit/${id}`, data).then(res =>
      dispatch({
        type: SET_PROVIDERS,
        payload: res.data
      })
    );
  }
}

export function putProduct(data, id) {
  return async function (dispatch) {
    axios.put(URL + `/productsEdit/${id}`, data).then(res =>
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data
      })
    );
  }
}

export function putUser(data, id) {
  return async function (dispatch) {
    axios.put(URL + `/mUser/${id}`, data).then(res =>
      dispatch({
        type: PUT_USER,
        payload: res.data
      })
    );
  }
}

export function putStock(data) {
  return async function (dispatch) {
    axios.put(URL + '/editStock', data).then(res =>
      dispatch({
        type: SET_STOCK,
        payload: res.data
      })
      )
  }
}

export function orderByStock(payload) {
  return {
    type: ORDER_BY_STOCK,
    payload,
  }
}
