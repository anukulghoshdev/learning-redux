import React from "react";
import ProductCart from "../components/ProductCart";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();
  // console.log(products);
  //  console.log(state); //{status: true, data: Array(8)}

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <ProductCart key={product._id} product={product} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
