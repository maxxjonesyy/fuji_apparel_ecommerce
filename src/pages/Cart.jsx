import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../logic/redux/slices/cartSlice";

import Navbar from "../components/Navbar";

function Cart({ content }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartState);

  const { emptyCart } = content.images;

  function removeCartItem(passedProduct) {
    const filtered = cart.filter((products) => products !== passedProduct);
    dispatch(removeItem(filtered));
  }

  function getCartSum() {
    const priceArray = [];
    for (const product in cart) {
      priceArray.push(Number(cart[product].price));
    }
    return priceArray.reduce((prevVal, currentVal) => prevVal + currentVal);
  }

  return cart.length > 0 ? (
    <>
      <Navbar />

      <div className='flex justify-between px-5 pt-5 lg:mx-5'>
        <h2 className='text-lg font-semibold lg:text-xl'>Shopping Cart:</h2>
        <span className='text-lg font-semibold lg:text-xl'>{`Items: ${cart.length}`}</span>
      </div>

      {cart.map((product, index) => {
        return (
          <div
            key={index}
            className='grid items-center grid-cols-2 py-10 my-5 border lg:grid-cols-3 lg:px-10 xl:px-20'
          >
            <img
              src={product.image}
              alt={product.name}
              className='w-full lg:w-2/3'
            />

            <div className='flex flex-col items-center gap-2 px-5 lg:flex-row lg:col-span-2 lg:justify-between'>
              <h3 className='text-lg font-semibold lg:text-2xl'>
                {product.name.split("-")[0]}
              </h3>

              <p className='pt-2 lg:text-xl'>${product.price}</p>

              <p className='border p-1.5 w-full rounded-md text-center text-sm lg:text-base lg:w-[150px]'>
                {product.size}
              </p>
              <button
                className='p-1.5 w-full text-white bg-black rounded-md text-sm lg:text-base lg:w-[150px]'
                onClick={() => removeCartItem(product)}
              >
                Remove Item
              </button>
            </div>
          </div>
        );
      })}

      <div className='w-full my-10 text-center'>
        <p className='text-lg font-semibold '>Cart Total: ${getCartSum()}</p>
        <button
          className='w-1/2 mx-auto mt-5 button lg:w-[512px]'
          onClick={() => dispatch(clearCart([]))}
        >
          Empty Cart
        </button>
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <div className='w-full'>
        <h1 className='pt-10 text-xl font-semibold text-center lg:text-2xl'>
          You have no items in your cart.
        </h1>
        <img
          src={emptyCart.src}
          alt={emptyCart.name}
          className='pt-20 mx-auto'
        />
      </div>
    </>
  );
}

export default Cart;
