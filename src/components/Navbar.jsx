import React from "react";
import { Cross as Hamburger } from "hamburger-react";

export default function Navbar({ content, cart }) {
  function handleHamburger(toggled) {
    const hamburgerList = document.getElementById("hamburger_list");
    const background = document.getElementById("background");

    if (toggled) {
      hamburgerList.classList.add("animate-slide-in-right");
      hamburgerList.classList.remove("animate-slide-out-right");
      background.classList.add("animate-fade-in");
      background.classList.remove("animate-fade-out");
    } else {
      hamburgerList.classList.add("animate-slide-out-right");
      hamburgerList.classList.remove("animate-slide-in-right");
      background.classList.add("animate-fade-out");
      background.classList.remove("animate-fade-in");
    }
  }

  return (
    <>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            src={content.images.logo.src}
            alt={content.images.logo.name}
            className='w-24 '
          />
          <h1 className='text-2xl font-bold uppercase '>Fuji Apparel</h1>
        </div>

        <aside aria-label='Sidebar' id='hamburger' className='z-[1]'>
          <div className='relative z-[1]'>
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
                <div className='inline-block w-8 ml-5 text-sm text-center rounded-sm bg-grey'>
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
