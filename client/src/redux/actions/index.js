import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
export const GET_ALL_PROVIDERS = 'GET_ALL_PROVIDERS'
export const GET_PROVIDER_DETAIL = 'GET_PROVIDER_DETAIL'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_DIETS = 'GET_ALL_DIETS'
export const GET_DETAIL = "GET_DETAIL"
export const GET_BY_TITLE = 'GET_BY_TITLE'
export const POST_USER = 'POST_USER'
export const SET_FILTER_STATE = 'SET_FILTER_STATE'
export const FILTER = 'FILTER'


export function getAllProducts (){
    return async function (dispatch){
        const json = await axios.get('http://localhost:3001/products');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data 
        })
    }
};
export function getDetail(id){
    return async function (dispatch){
        try{
            var json= await axios.get(`http://localhost:3001/products/${id}`);
            return dispatch ({
                type: GET_DETAIL,
                payload: json.data
            })
        }
        catch(error){
            console.log("el error del detalle es: ", error)
        }
    }
};
export function getByTitle (payload){
    return {
        type: GET_BY_TITLE,
        payload

    }
}

export function getProductDetail (id){
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/products/${id}`);
        return dispatch({
            type: GET_PRODUCT_DETAIL,
            payload: json.data 
        })
    }
};

export function getAllProviders (){
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/providers`);
        return dispatch({
            type: GET_ALL_PROVIDERS,
            payload: json.data 
        })
    }
};

export function getProviderDetail (id){
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/providers/${id}`);
        return dispatch({
            type: GET_PROVIDER_DETAIL,
            payload: json.data 
        })
    }
};

export function getAllCategories (){
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/categories`);
        return dispatch({
            type: GET_ALL_CATEGORIES,
            payload: json.data 
        })
    }
};

export function getAllDiets (){
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/diets`);
        return dispatch({
            type: GET_ALL_DIETS,
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

export function postUser(payload) {
    return async function () {
      console.log('actions postUser ',{payload});
      const response = await axios.post('/users', payload);
      console.log({response});
      return response;
    }
  };
export function setFilterState (payload){
    return {
        type: SET_FILTER_STATE ,
        payload
    }
};
export function filter (){
    return{
        type:FILTER ,
    }
};