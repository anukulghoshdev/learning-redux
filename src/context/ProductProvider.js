import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

// import { actionTypes } from "../state/ProductState/actionTypes";
// import productReducer, {
//   initialState,
//   product_Reducer,
// } from "../state/ProductState/productReducer";

export const PRODUCTS_CONTEXT = createContext();

export const actionTypes = {
  FETCHING_START: "FETCHING_START",
  FETCHING_SUCCESS: "FETCHING_SUCCESS",
  FETCHING_ERROR: "FETCHING_ERROR",
  ADD_TO_CART: "ADD_TO_CART",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",

};

const ProductProvider = ({ children }) => {
  //const [products, setProducts] = useState([]);
  //console.log(products); //{status: true, data: Array(8)}

  const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishlist: []
  };

  const product_Reducer = (state,action) => {
    switch (action.type) {
      case actionTypes.FETCHING_START:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case actionTypes.FETCHING_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: false,
        };
      case actionTypes.FETCHING_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };

      case actionTypes.ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };

      case actionTypes.ADD_TO_WISHLIST:
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(product_Reducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data })
      )
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  const value = {
    state, // {type: 'FETCHING_SUCCESS', payload: Array(8), loading: false, products: Array(1), error: false}
    dispatch,
  };

  return (
    <PRODUCTS_CONTEXT.Provider value={value}>
      {children}
    </PRODUCTS_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCTS_CONTEXT);
  //console.log('context',context); // context {products: {…}}
  return context;
};

export default ProductProvider;
