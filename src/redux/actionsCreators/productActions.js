import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

export const add_to_cart = (product)=>{
    return{
        type: ADD_TO_CART,
        payload: product
    };
}
export const remove_from_cart = (product)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: product
    };
}