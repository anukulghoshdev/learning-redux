import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import productReducer from "./productReducer";

export const rootReducer = combineReducers({
    product: productReducer,
    product_filter: filterReducer
})