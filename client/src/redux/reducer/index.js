import  { GET_ALL_PRODUCTS, GET_DETAIL } from '../actions'

const initialState = {
    allProducts: [],
    detail: []
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                allProducts: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }

        default: 
            return { ...state }
    }
}

export default rootReducer;
