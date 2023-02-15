import React from "react";
import Navbar from "/src/components/Navbar";

function Home({ content, cart }) {
  const slides = [
    { name: content.images.slide1.name, src: content.images.slide1.src },
    { name: content.images.slide2.name, src: content.images.slide2.src },
    { name: content.images.slide3.name, src: content.images.slide3.src },
  ];

  return (
    <div className='flex flex-col w-screen h-screen'>
      <Navbar cart={cart} />

      <div className='absolute flex items-center justify-center w-full h-full z-[1]'>
        <a href=''>
          <button className='w-[250px] h-[45px] bg-black text-white rounded-md font-semibold text-xl hover:bg-white hover:text-black transition-all'>
            Shop
          </button>
        </a>
      </div>

      <section aria-label='slideshow' className='flex-1 overflow-hidden'>
        {slides.map((slide, index) => {
          return (
            <div key={index} className='w-full h-full animate-slide-show '>
              <img
                src={slide.src}
                alt={slide.name}
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
