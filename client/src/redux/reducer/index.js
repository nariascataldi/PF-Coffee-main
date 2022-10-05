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
  CHANGE_MAIL,
  RESET_FILL_CART,
  CART_EMPTYING,
  GET_CLOUDINARY_RESPONSE,
  CLEAR_CLOUDINARY_RESPONSE,
  POST_COMMENT,
  POST_NEWSLETTER,
  GET_ALL_USERS,
  SET_USER_INIT,
  GET_ALL_ORDERS,
  GET_ALL_NEWSLETTER,
  GET_USER_DETAIL,
  ORDER_BY_STOCK,
  RESET_FILTER,
  GET_ALL_OFERTS  } from '../actions'


const initialState = {
  allProducts: [],
  products: [],
  users: [],
  productDetail: {},
  userDetail:{},
  providers: [],
  providerDetail: {},
  categories: [],
  diets: [],
  detail: [],
  fillCart: JSON.parse(localStorage.getItem('carrito')) || [],
  responseCloudinary: {},
  token: [],
  checkedMails: [],
  userInit: JSON.parse(localStorage.getItem('Sign In')) || {},
  orders: [],
  newsletter: [],
  oferts: [],
  filterBy: {
    title: '',
    category: '',
    diet: '',
    sort: '',
    minPrice: '',
    maxPrice: ''
  },
  setReducedCart: []
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
    case GET_USER_DETAIL:
        return {
          ...state,
          userDetail: action.payload
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
    case POST_NEWSLETTER:
      return {
        ...state
      }
    case POST_USER:
      return {
        ...state,
        userInit: action.payload,
      }
    case CONFIRM_ID:
      return {
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
    // usuario con sesion iniciada
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case SET_USER_INIT:

      return {
        ...state,
        userInit: action.payload
      }
      case RESET_FILTER :
        return {
          ...state,
          filterBy: {
            title: '',
            category: '',
            diet: '',
            sort: '',
            minPrice: '',
            maxPrice: ''
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
      const filterPrice = state.filterBy.minPrice === '' && state.filterBy.maxPrice === '' ? filterDiet : filterDiet.filter(e => {
        if (!state.filterBy.minPrice) return e.price >= 0 && e.price <= state.filterBy.maxPrice
        if (!state.filterBy.maxPrice) return e.price >= state.filterBy.minPrice && e.price <= Infinity
        return e.price >= state.filterBy.minPrice && e.price <= state.filterBy.maxPrice
      })
      const sort = state.filterBy.sort === '' ? filterPrice : state.filterBy.sort === 'Z-A' ? [...filterPrice].sort((a, b) => {
        let A = a.title.toLowerCase();
        let B = b.title.toLowerCase();
        if (A === B) {
          return 0;
        }
        if (A > B) {
          return -1;
        }
        if (A < B) {
          return 1;
        }
      }) : state.filterBy.sort === 'A-Z' ? [...filterPrice].sort((a, b) => {
        let A = a.title.toLowerCase();
        let B = b.title.toLowerCase();
        if (A === B) {
          return 0;
        }
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
      }) : state.filterBy.sort === 'High' ? [...filterPrice].sort((a, b) => {
        let A = a.price
        let B = b.price
        return B - A
      }) : state.filterBy.sort === 'Low' && [...filterPrice].sort((a, b) => {
        let A = a.price
        let B = b.price
        return A - B
      })
      return {
        ...state,
        products: sort
      }

    case ORDER_BY_STOCK:
      // console.log({state});
      const sortStock = action.payload === 'min' ?
        state.products.sort(function (aStock, bStock) {
          let a = aStock.stock
          let b = bStock.stock

          if (a > b) {
            return 1;
          }
          if (b > a) {
            return -1;
          }
          return 0;
        })
        :
        state.products.sort(function (aStock, bStock) {
          let a = aStock.stock
          let b = bStock.stock

          if (a > b) {
            return -1;
          }
          if (b > a) {
            return 1;
          }
          return 0;
        })
      return {
        ...state,
        products: sortStock,
      }

    case FILL_CART:
      // const findIdStock = action.payload[0].id
      // console.log('el action payload es ',action.payload[0].title)
      return {
        ...state,
        fillCart: [...state.fillCart, ...action.payload]
      }
    case RESET_FILL_CART:
      const indexCart = state.fillCart.findIndex((element) => element.id === action.payload);
      let copyCart = [...state.fillCart];
      copyCart.splice(indexCart, 1)

      return {
        ...state,
        fillCart: copyCart
      }
    case CART_EMPTYING:
      return {
        ...state,
        fillCart: []
      }
    case POST_PROVIDERS:
      return {
        ...state,
        providers: action.payload
      }
    case GET_CLOUDINARY_RESPONSE:
      return {
        ...state,
        responseCloudinary: action.payload
      }
    case CLEAR_CLOUDINARY_RESPONSE:
      return {
        ...state,
        responseCloudinary: {}
      }
    case POST_COMMENT:
      return {
        ...state
      }
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload
      }
    case GET_ALL_NEWSLETTER:
      return {
        ...state,
        newsletter: action.payload
      }
     case GET_ALL_OFERTS:
      return {
        ...state,
        oferts: action.payload
      }
    default:
      return { ...state }
  }

}

export default rootReducer;
