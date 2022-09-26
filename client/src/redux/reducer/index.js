import {
  GET_ALL_CATEGORIES,
  GET_ALL_DIETS,
  GET_BY_TITLE,
  GET_ALL_PRODUCTS,
  GET_ALL_PROVIDERS,
  GET_PRODUCT_DETAIL,
  GET_DETAIL,
  GET_PROVIDER_DETAIL,
  POST_USER,
  POST_PRODUCT,
  SET_FILTER_STATE,
  FILTER,
  POST_PROVIDERS,
  CLEAR_DETAIL,
  FILL_CART,
  RESET_FILL_CART,
  GET_CLOUDINARY_RESPONSE,
  CLEAR_CLOUDINARY_RESPONSE,
  POST_COMMENT,
  fillCart
} from '../actions'

const initialState = {
  allProducts: [],
  products: [],
  productDetail: {},
  providers: [],
  providerDetail: {},
  categories: [],
  diets: [],
  detail: [],
  fillCart: JSON.parse(localStorage.getItem('carrito')) || [],
  responseCloudinary: {},
  filterBy: {
    title: '',
    category: '',
    diet: '',
    sort:''
  }
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload
      }
    case GET_BY_TITLE:
      const allP = state.allProducts;
      const dataTilte = allP.filter((p) => {
        return p.title.toLowerCase().includes(action.payload.toLowerCase())
      })
      return {
        ...state,
        products: dataTilte
      }
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload
      }
    case CLEAR_DETAIL:
      return {
        ...state,
        productDetail: {},
        detail: []
      }
    case GET_ALL_PROVIDERS:
      return {
        ...state,
        providers: action.payload
      }
    case GET_PROVIDER_DETAIL:
      return {
        ...state,
        providerDetail: action.payload
      }
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case GET_ALL_DIETS:
      return {
        ...state,
        diets: action.payload
      }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    case POST_PRODUCT:
      return {
        ...state
      }
    case POST_USER:
      return {
        ...state
      }
    case SET_FILTER_STATE:
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          ...action.payload
        }

      }
    case FILTER:
      const allProd = state.allProducts;
      const titleFilter = state.filterBy.title === '' ? allProd : allProd.filter(e => {
        return e.title.toLowerCase().includes(state.filterBy.title.toLocaleLowerCase())
      })
      const filterCategory = state.filterBy.category === "" ? titleFilter : titleFilter.filter(e => {
        return e.categories.map(d => d.name).includes(state.filterBy.category)
      })
      const filterDiet = state.filterBy.diet === "" ? filterCategory : filterCategory.filter(e => {
        return e.diets.map(d => d.name).includes(state.filterBy.diet)
      })
      const sort = state.filterBy.sort === ''? filterDiet : state.filterBy.sort=== 'Z-A' ? filterDiet.sort((a,b)=>{
        let A = a.title.toLowerCase();
                let B = b.title.toLowerCase();
                if(A === B) {
                    return 0; 
                  }
                if(A > B) {
                    return -1;
                  }
                  if(A < B) {
                    return 1;
                  }
        }) : state.filterBy.sort==='A-Z' && filterDiet.sort((a,b)=>{
                let A = a.title.toLowerCase();
                let B = b.title.toLowerCase();
                  if(A === B) {
                    return 0; 
                  }
                  if(A < B) {
                    return -1;
                  }
                  if(A > B) {
                    return 1;
                  }
              })
      return {
        ...state,
        products: [...sort]
      }
    case FILL_CART :
      return {
        ...state,
        fillCart: [...state.fillCart,...action.payload]
      }
    case RESET_FILL_CART : 
    const indexCart = state.fillCart.findIndex( (element) => element.id === action.payload);
    let copyCart = [...state.fillCart];
    copyCart.splice(indexCart,1)
  
      return {
        ...state,
        fillCart: copyCart
      }
    case POST_PROVIDERS :
      return{
        ...state,
        providers: action.payload
      }
    case GET_CLOUDINARY_RESPONSE:
      return{
        ...state,
        responseCloudinary: action.payload
      }
    case CLEAR_CLOUDINARY_RESPONSE:
      return{
        ...state,
        responseCloudinary: {}
      }
    case POST_COMMENT :
      return{
        ...state
      }

    default:
      return { ...state }
  }

}

export default rootReducer;
