import React from "react";
import { Cross as Hamburger } from "hamburger-react";

function Navbar({ cart }) {
  function handleHamburger(toggled) {
    const app = document.getElementById("app");
    const hamburgerList = document.getElementById("hamburger_list");
    const background = document.getElementById("background");

    const backgroundDiv = document.createElement("div");
    backgroundDiv.setAttribute("id", "background");
    backgroundDiv.classList =
      "absolute top-0 w-screen h-screen bg-black opacity-50 z-[2]";

    if (toggled) {
      hamburgerList.classList.add("animate-slide-in-right");
      hamburgerList.classList.remove("animate-slide-out-right");
      app.append(backgroundDiv);
    } else {
      hamburgerList.classList.add("animate-slide-out-right");
      hamburgerList.classList.remove("animate-slide-in-right");
      background.remove();
    }
  }

  return (
    <>
      <nav className='flex items-center justify-between p-3'>
        <div className='flex items-center'>
          <img src='logo.svg' alt='logo' className='w-24 ' />
          <h1 className='text-2xl font-bold uppercase '>Fuji Apparel</h1>
        </div>

        <aside aria-label='Sidebar' id='hamburger' className='z-[10]'>
          <div className='relative z-[10]'>
            <Hamburger onToggle={handleHamburger} size={30} />
          </div>
          <ul
            id='hamburger_list'
            className='fixed w-[60%] h-screen top-0 right-0 bg-white translate-x-full'
          >
            <div className='flex flex-col justify-center h-full gap-3 p-3'>
              <li className='p-1 text-xl rounded-md hover:bg-lightGrey'>
                <a href='' className='pl-1'>
                  Home
                </a>
              </li>
              <li className='p-1 text-xl rounded-md hover:bg-lightGrey'>
                <a href='' className='pl-1'>
                  About
                </a>
              </li>
              <li className='p-1 text-xl rounded-md hover:bg-lightGrey'>
                <a href='' className='pl-1'>
                  Shop
                </a>
                <div className='inline-block w-8 ml-5 text-sm text-center bg-black rounded-sm'>
                  <span className='text-white'>{cart.length}</span>
                </div>
              </li>
              <li className='p-1 text-xl rounded-md hover:bg-lightGrey'>
                <a href='' className='pl-1'>
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
