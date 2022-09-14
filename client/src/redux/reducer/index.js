import  {GET_ALL_PRODUCTS} from '../actions'

const initialState = {
    allProducts: []
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                allProducts: action.payload
            }
    }
    return state
}

export default rootReducer;