import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_DETAIL = "GET_DETAIL"
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
export function getByTitle (payload){
    return {
        type: GET_BY_TITLE,
        payload

    }
}