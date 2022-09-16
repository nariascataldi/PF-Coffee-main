import  { GET_ALL_CATEGORIES, GET_ALL_DIETS, GET_ALL_PRODUCTS, GET_ALL_PROVIDERS, GET_PRODUCT_DETAIL, GET_PROVIDER_DETAIL } from '../actions'

const initialState = {
    allProducts: [],
    productDetail: {},
    providers: [],
    providerDetail: {},
    categories: [],
    diets: []
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                allProducts: action.payload
            }
        case GET_PRODUCT_DETAIL:
            return{
                ...state,
                productDetail: action.payload
            }
        case GET_ALL_PROVIDERS:
            return{
                ...state,
                providers: action.payload
            }
        case GET_PROVIDER_DETAIL:
            return{
                ...state,
                providerDetail: action.payload
            }
        case GET_ALL_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        case GET_ALL_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        default: 
            return { ...state }
    }
}

export default rootReducer;
