import AddProduct from "../../../pages/Dashboard/AddProduct";
import { addProduct } from "../../actions/productAction";

const addProductData=(product)=>{
    return async(dispatch, getState)=>{
        const url = 'http://localhost:5000/product'
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json()
        if(data.acknowledged){
            dispatch(addProduct({
                _id: data.insertedId,
                ...product
            }))
        }
        
    }
}
export default addProductData;