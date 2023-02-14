import React from "react";
import { Cross as Hamburger } from "hamburger-react";

export default function Navbar({ content }) {
  function handleHamburger() {
    const navLinks = document.getElementById("nav_links");

    navLinks.classList.toggle("hidden");
  }

  return (
    <>
      <nav className='flex items-center justify-between '>
        <div>
          <img
            src={content.images.logo.src}
            alt={content.images.logo.name}
            className='inline-block w-24'
          />
          <h1 className='inline-block uppercase'>Fuji Apparel</h1>
        </div>

        <div className=''>
          <Hamburger onToggle={handleHamburger} />
          <div
            id='nav_links'
            className='fixed right-0 top-0 hidden flex-col w-[50%] h-screen bg-slate-400'
          >
            <a href=''>Home</a>
            <a href=''>Shop</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
            <img
              src={content.images.shoppingCart.src}
              alt={content.images.shoppingCart.name}
              className='w-[30px]'
            />
          </div>
        </div>
      </nav>
    </>
  );
}
