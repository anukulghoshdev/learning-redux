import { loaded_product } from "../../actions/productAction";

const load_products_data=()=>{
    return async(dispatch, getState)=>{
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json();
        if(data.data.length){
            dispatch(loaded_product(data.data))
        }
    }
}
export default load_products_data