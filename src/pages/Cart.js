import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10">
        {
            cartProducts.sort((a,b)=>a._id - b._id).map(cartProduct=> (
                <ProductCart product={cartProduct}/>
            ))
        }
    </div>
  )
};

export default Cart;
