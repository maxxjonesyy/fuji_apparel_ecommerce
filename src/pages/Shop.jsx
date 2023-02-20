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
                <h1 className='product-heading'>{product.name}</h1>
                <span className='product-price'>${product.price}</span>
                <p className='product-description'>{product.description}</p>
                <button className='button'>
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
