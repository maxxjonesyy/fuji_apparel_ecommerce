import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import Swal from "sweetalert2";

import Navbar from "../components/Navbar";

function ProductPage() {
  const { state } = useLocation();
  const [size, setSize] = useState("");

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  function handleCartSubmit() {
    if (size === "") {
      Swal.fire({
        title: "Error!",
        text: "Please select a size before proceeding",
        icon: "error",
        confirmButtonColor: "#000000",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Item has been added to cart",
        icon: "success",
        confirmButtonColor: "#000000",
      });
    }
  }

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />

      <div className='flex-1'>
        <div className='flex flex-col items-center justify-center h-full 2xl:grid 2xl:grid-cols-3 '>
          <div className='lg:grid lg:grid-cols-2 lg:col-span-2'>
            {state.product.images.map((image, index) => (
              <img
                key={index}
                src={image.fields.file.url}
                alt={image.fields.title}
                className='w-[500px] lg:w-full'
              />
            ))}
          </div>

          <div className='flex flex-col items-center gap-10 px-5 py-10'>
            <h1 className='pt-5 product-heading'>{state.product.name}</h1>
            <span className='product-price'>${state.product.price}</span>
            <p className='w-full lg:w-2/3'>{state.product.description}</p>

            <FormControl id='form' className='w-full lg:w-2/3'>
              <InputLabel>Select Size</InputLabel>
              <Select
                value={size}
                label='Select Size'
                onChange={handleSizeChange}
              >
                <MenuItem value='Small'>Small</MenuItem>
                <MenuItem value='Medium'>Medium</MenuItem>
                <MenuItem value='Large'>Large</MenuItem>
                <MenuItem value='X Large'>X Large</MenuItem>
              </Select>
            </FormControl>

            <button
              className='w-full text-white bg-black rounded-md h-[50px] lg:w-2/3'
              onClick={handleCartSubmit}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
