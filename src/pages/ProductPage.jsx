import React from "react";

import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const { state } = useLocation();

  return (
    <>
      <Navbar />

      <div className='grid items-center grid-cols-3'>
        <div className='grid grid-cols-2 col-span-2'>
          {state.product.images.map((image, index) => (
            <img
              key={index}
              src={image.fields.file.url}
              alt={image.fields.title}
              className='w-full'
            />
          ))}
        </div>

        <div className=''>
          <h1>{state.product.name}</h1>
          <p>{state.product.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
