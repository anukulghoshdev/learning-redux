import {
  SEARCHING,
  TOOGLE_BRAND,
  TOOGLE_STOCK,
} from "../actionTypes/actionTypes";

export const toggleBrand = (brand) => {
  return {
    type: TOOGLE_BRAND,
    payload: brand,
  };
};

export const toggleStock = () => {
  return {
    type: TOOGLE_STOCK,
  };
};

export const searchProduct = (searchText) => {
  return {
    type: SEARCHING,
    payload: searchText,
  };
};
