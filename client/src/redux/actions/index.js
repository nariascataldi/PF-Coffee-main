import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_BY_TITLE = 'GET_BY_TITLE'

export function getAllProducts (){
    return async function (dispatch){
        const json = await axios.get('http://localhost:3001/products');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data 
        })
    }
};

export function getByTitle (payload){
    return {
        type: GET_BY_TITLE,
        payload
    }
}