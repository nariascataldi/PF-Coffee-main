import  { 
    GET_ALL_CATEGORIES, 
    GET_ALL_DIETS, 
    GET_BY_TITLE, 
    GET_ALL_PRODUCTS, 
    GET_ALL_PROVIDERS, 
    GET_PRODUCT_DETAIL, 
    GET_DETAIL, 
    GET_PROVIDER_DETAIL,
    POST_USER,
    SET_FILTER_STATE,
    FILTER
 } from '../actions'

const initialState = {
    allProducts: [],
    products:[],
    productDetail: {},
    providers: [],
    providerDetail: {},
    categories: [],
    diets: [],
    detail: [],
    filterBy : {
        title: '',
        category: '',
        diet:''
    }
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

        case POST_USER:
            return {
                ...state
            }    
            
        case SET_FILTER_STATE :
            return {
                ...state,
                filterBy:{
                    ...state.filterBy,
                    ...action.payload
                }

            }
        case FILTER:
            const allProd = state.allProducts;
            const titleFilter = state.filterBy.title==='' ? allProd : allProd.filter(e=>{
                return e.title.toLowerCase().includes(state.filterBy.title.toLocaleLowerCase())
            })
            const filterCategory= state.filterBy.category === "" ? titleFilter : titleFilter.filter(e=>{
                return e.categories.map(d=>d.name).includes(state.filterBy.category) 
            })
            const filterDiet= state.filterBy.diet=== "" ? filterCategory : filterCategory.filter(e=>{
                return e.diets.map(d=>d.name).includes(state.filterBy.diet)
            })
            return {
                ...state ,
                products: [...filterDiet]
            }


        default: 
            return { ...state }
    }   
        
}

export default rootReducer;
