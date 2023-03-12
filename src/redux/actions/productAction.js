import {
  ADD_PRODUCT,
  ADD_TO_CART,
  LOADED_A_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  SEARCHING,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded_product = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
export const loaded_A_product = (product) => {
  return {
    type: LOADED_A_PRODUCT,
    payload: product,
  };
};

export const update_product = (product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};
