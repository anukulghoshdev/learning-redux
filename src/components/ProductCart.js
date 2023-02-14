import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  add_to_cart,
  remove_from_cart,
} from "../redux/actionsCreators/productActions";
import { ADD_TO_CART } from "../redux/actionTypes/actionTypes";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";

const ProductCart = ({ product }) => {
  const dispath = useDispatch();
  const location = useLocation(); // {pathname: '/cart', search: '', hash: '', state: null, key: 'sk4nxequ'}

  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
      key={product._id}
    >
      {location.pathname === "/cart" && (
        <div className="absolute rounded-full h-12 w-12 grid place-items-center bg-purple-400 text-white p-3 text-center">
          <p>{product.quantity}</p>
        </div>
      )}

      <div className="h-52 w-52 mx-auto ">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, i) => {
            return (
              <li key={i} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-2 mt-5">
        {location.pathname === "/cart" && (
          <button
            className="bg-red-500 hover:bg-red-600 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispath(remove_from_cart(product))}
          >
            <div className="flex justify-center items-center">
              <RiDeleteBin5Fill size={20} />
              <span className="ml-2">Remove</span>
            </div>
          </button>
        )}

        {location.pathname === "/" && (
          <button
            className="bg-indigo-500 hover:bg-indigo-600 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispath(add_to_cart(product))}
          >
            <div className="flex justify-center items-center">
              <RiShoppingCartFill size={20} />
              <span className="ml-2">Add to cart</span>
            </div>
          </button>
        )}

        <button
          title="Add to wishlist"
          className="bg-indigo-500  py-1 px-2 rounded-full"
        >
          <BiListPlus className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
