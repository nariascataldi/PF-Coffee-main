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
  CONFIRM_ID,
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
  TRUE_LOGIN,
  ERROR_LOGIN
  // fillCart
} from '../actions' 
  
const initialState = {
  username: '',
  name: '',
  status: '',
  msj: '',
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
  token: [], // ???????
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
        ...state,
        msj: action.payload
      }
    case CONFIRM_ID:
      return{
        ...state,
        token: action.payload,
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
      const sort = state.filterBy.sort === '' ? filterDiet : state.filterBy.sort=== 'Z-A' ? [...filterDiet].sort((a,b)=>{
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
        }) : state.filterBy.sort==='A-Z' ? [...filterDiet].sort((a,b)=>{
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
        }) : state.filterBy.sort==='High' ? [...filterDiet].sort((a,b)=>{
              let A = a.price
              let B = b.price
                return B - A
        }) : state.filterBy.sort==='Low' && [...filterDiet].sort((a,b)=>{
              let A = a.price
              let B = b.price
                return A - B
        })
      return {
        ...state,
        products: sort
      }
    case FILL_CART :
      return {
        ...state,
        fillCart: [...state.fillCart, ...action.payload]
      }
    case RESET_FILL_CART : 
    const deleteCart = state.fillCart.filter((e)=>{ 
      return e.id !== action.payload
    })
      
      return {
        ...state,
        fillCart: deleteCart
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
    case TRUE_LOGIN :
      return{
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        status: action.payload.status,
      }
    case ERROR_LOGIN :  
      let error = (action.payload.name) ? 'username invalid' : action.payload.msg;
      let name = (!action.payload.name) ? 'error in fetchAPI' : action.payload.name;
      return{
        ...state,
        name: name,
        username: 'error',
        msj: error
      }
  

    default:
      return { ...state }
  }

}

export default rootReducer;
