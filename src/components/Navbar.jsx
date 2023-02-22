import React from "react";
import { Cross as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart.cartState);

  function handleHamburger(toggled) {
    const hamburgerList = document.getElementById("hamburger_list");

    if (toggled) {
      hamburgerList.classList.add("animate-slide-in-right");
      hamburgerList.classList.remove("animate-slide-out-right");
    } else {
      hamburgerList.classList.add("animate-slide-out-right");
      hamburgerList.classList.remove("animate-slide-in-right");
    }
  }

  return (
    <>
      <nav className='flex items-center justify-between p-3 lg:justify-around lg:p-1'>
        <div className='flex items-center'>
          <img src='logo.svg' alt='logo' className='w-24 lg:w-48' />
          <h1 className='text-2xl font-bold uppercase lg:text-4xl'>
            Fuji Apparel
          </h1>
        </div>

        <aside aria-label='Sidebar' id='hamburger' className='z-[10]'>
          <div className='relative z-[10] lg:hidden'>
            <Hamburger onToggle={handleHamburger} size={30} />
          </div>
          <ul
            id='hamburger_list'
            className='fixed w-[60%] h-screen top-0 right-0 bg-white translate-x-full lg:relative lg:h-auto lg:w-auto lg:translate-x-0'
          >
            <div className='flex flex-col justify-center h-full gap-3 p-3 lg:flex-row lg:gap-10'>
              <li className='nav-heading'>
                <Link to='/' className='link-padding'>
                  Home
                </Link>
              </li>
              <li className='nav-heading'>
                <Link to='/about' className='link-padding'>
                  About
                </Link>
              </li>
              <li className='nav-heading'>
                <Link to='/shop' className='link-padding'>
                  Shop
                </Link>
              </li>
              <li className='nav-heading'>
                <Link to='/contact' className='link-padding'>
                  Contact
                </Link>
              </li>
              <li className='nav-heading'>
                <Link to='/cart' className='link-padding'>
                  Cart
                  <div className='inline-block w-8 ml-5 text-sm text-center bg-black rounded-sm'>
                    <span className='text-white'>{cart.length}</span>
                  </div>
                </Link>
              </li>
            </div>
          </ul>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
