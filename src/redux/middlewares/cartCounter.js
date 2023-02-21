import { createLogger } from "redux-logger";
import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCouter=(store)=>(next)=>(action)=>{
    // console.log('current state', store.getState());
    // console.log('taken action', action);
    const {product: {cart}} = store.getState();
    // console.log(cart.length); // {product: {…}, product_filter: {…}}

    if(action.type === ADD_TO_CART){
        const newAction = {
            ...action,
            payload: {...action.payload, cartPosition: cart.length}
        }
        return next(newAction);
    }
    return next(action);
}
export default cartCouter;