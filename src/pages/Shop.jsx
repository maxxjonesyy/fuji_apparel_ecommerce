import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Shop({ content }) {
  return (
    <div>
      <Navbar />

      <div
        id='shop'
        className='grid grid-cols-1 gap-20 pt-10 pb-10 md:grid-cols-2 2xl:grid-cols-3'
      >
        {content.products.map((product, index) => {
          return (
            <div
              key={index}
              id={index}
              className='mt-auto max-w-[600px] mx-auto '
            >
              <img
                src={product.images[0].fields.file.url}
                alt={product.images[0].fields.title}
              />
              <div className='flex flex-col items-center w-full gap-5 p-5'>
                <h1 className='text-2xl font-semibold'>{product.name}</h1>
                <span className='text-lg font-semibold'>${product.price}</span>
                <p className='text-sm text-center lg:text-base'>
                  {product.description}
                </p>
                <button className='w-full p-2 text-white bg-black border rounded-md hover:text-black hover:bg-white md:w-2/3'>
                  <Link
                    to='/product'
                    state={{ product: content.products[index] }}
                  >
                    Product Info
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
