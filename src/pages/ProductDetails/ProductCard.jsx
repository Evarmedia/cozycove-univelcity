/* eslint-disable react/prop-types */
// import React from 'react';
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa6";


const ProductCard = ({ product }) => {
  return (
    <>
      <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-">
    <NavLink to={`/products/${product._id}`}>
        <div className="px-5 pb-5 h-3/4">
          <img
            className="p-8 rounded-t-lg w-[300px] h-[300px] object-scale-down"
            src={product.image}
            alt={product.title}
          />
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </div>
        </NavLink>
        <div className="px-5 pb-5">
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <FaStar className="text-yellow-300"/>
            </div>
            <span className=" bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-semibold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <button className="btn-cart">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

// <div className="border shadow-md rounded-lg p-4 mb-4">
//   <h2 className="text-xl font-semibold">{product.title}</h2>
//   <p className="text-gray-600 mb-2">${product.price}</p>
//   <img src={product.image} alt={product.title} className="w-full" />
//   <button>Add to Cart</button>
// </div>