import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggleBrand, toggleStock } from "../../redux/actions/filterAction";
import load_products_data from "../../redux/thunk/products/fetchProduct";

const Home = () => {
 
  // const state = useSelector((state)=>state)
  // console.log(state); // {product: {…}, product_filter: {…}}

  const filters = useSelector((state)=>state.product_filter.filters);
  const{brands, stock} = filters;
  const products = useSelector((state)=>state.product.products);



  useEffect(() => {
    dispatch(load_products_data())
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

  const dispatch = useDispatch();
  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (brands.length ||  stock)) {
    content = products
      .filter((product) => {
        if(stock){
          return product.status === true
        }
        return product
        
      })
      .filter((product) => {
        if(brands.length){
          return brands.includes(product.brand)
        }
        return product
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }


  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass:null
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrand("AMD"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("AMD") && activeClass
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrand("INTEL"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("INTEL") && activeClass
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
