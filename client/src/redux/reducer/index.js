
import  { GET_ALL_PRODUCTS, GET_DETAIL, GET_BY_TITLE } from '../actions'

const initialState = {
    allProducts: [],
    detail: [],
    products:[]
};
  
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
