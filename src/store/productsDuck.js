// productsDuck.js

// Action Types
const FETCH_PRODUCTS_START = 'app/products/FETCH_PRODUCTS_START';
const FETCH_PRODUCTS_SUCCESS = 'app/products/FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'app/products/FETCH_PRODUCTS_FAILURE';
const CLEAR_PRODUCTS = 'app/products/CLEAR_PRODUCTS';

// Initial State
const initialState = {
  products: [],
  loading: false,
  error: null,
  total: 0
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        total: action.payload.total
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case CLEAR_PRODUCTS:
      return {
        products: [],
        loading: false,
        error: null,
        total: 0
      };

    default:
      return state;
  }
}

// Action Creators
export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
})




// Thunk
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());

    try {
      const response = await fetch(
        'https://dummyjson.com/products'
      );
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

// Selectors
export const productSelector = state => state.products;
