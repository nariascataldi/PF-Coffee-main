import  { GET_ALL_CATEGORIES, GET_ALL_DIETS, GET_BY_TITLE, GET_ALL_PRODUCTS, GET_ALL_PROVIDERS, GET_PRODUCT_DETAIL, GET_DETAIL, GET_PROVIDER_DETAIL } from '../actions'

const initialState = {
    allProducts: [],
    products:[],
    productDetail: {},
    providers: [],
    providerDetail: {},
    categories: [],
    diets: [],
    detail: []
}

  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                allProducts: action.payload,
                products: action.payload
            }
        case GET_BY_TITLE :
            const allP = state.allProducts;
            const dataTilte= allP.filter((p)=>{
                return p.title.toLowerCase().includes(action.payload.toLowerCase())
            })
            return{
                ...state,
                products:dataTilte
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
