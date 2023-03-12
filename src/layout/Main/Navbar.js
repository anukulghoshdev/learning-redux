import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/actions/filterAction";

const Navbar = () => {
  const dispatch = useDispatch();

  // const searchRef = useRef();
  // const [search, setSearch]=useState('');
  // const handleSubmit=()=>{
  //   setSearch(searchRef.current.value);
  // }

  return (
    <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <h1>Moon Tech</h1>

        <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
          <input
            className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
            type="text"
            onChange={(e) => dispatch(searchProduct(e.target.value))}
            name="search"
            id="search"
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <Link to="/">
          <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
            <IoIosListBox className="text-white" />
          </li>
        </Link>
        <Link to="/cart">
          <li title="cart" className="bg-indigo-500 p-2 rounded-full">
            <BsFillCartFill className="text-white " />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
