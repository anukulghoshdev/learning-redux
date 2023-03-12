import { loaded_A_product } from "../../actions/productAction";

const load_a_product_data=(id)=>{
    return async(dispatch, getState)=>{
        const res = await fetch(`http://localhost:5000/product/${id}`)
        const data = await res.json();
        console.log(data); // {status: true, data: {…}}

        // {_id: '63d776d5812f0ebf99dd79f6', model: 'AMD Ryzen 5 3600 Gaming PC', image: 'https://live.staticflickr.com/65535/52522855818_98bdd4c07a_o.jpg', status: true, keyFeature: Array(4), …}
        if(data.status){
            dispatch(loaded_A_product(data.data))
        }
    }
}
export default load_a_product_data;