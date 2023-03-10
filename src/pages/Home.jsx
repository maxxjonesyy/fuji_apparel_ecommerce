import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Home({ content }) {
  const slides = [
    { name: content.images.slide1.name, src: content.images.slide1.src },
    { name: content.images.slide2.name, src: content.images.slide2.src },
    { name: content.images.slide3.name, src: content.images.slide3.src },
  ];

  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar />

      <section
        id='slide_container'
        aria-label='slideshow'
        className='relative flex-1 overflow-hidden'
      >
        <div className='absolute w-full h-full text-center top-1/2 z-[1]'>
          <Link to='/shop'>
            <button className='w-[230px] h-[45px] bg-black text-white rounded-md font-semibold text-xl hover:bg-white hover:text-black transition-all'>
              Shop
            </button>
          </Link>
        </div>

        {slides.map((slide, index) => {
          return (
            <div key={index} className='w-full h-full animate-slide-show'>
              <img
                src={slide.src}
                alt={slide.name}
                loading='eager'
                className='object-cover w-full h-full opacity-70'
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
