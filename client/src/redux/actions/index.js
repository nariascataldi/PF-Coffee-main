import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

export function getAllProducts (){
    return async function (dispatch){
        const json = await axios.get('http://localhost:3001/products');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data 
        })
    }
};