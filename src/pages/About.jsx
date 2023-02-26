import React from "react";

import Navbar from "../components/Navbar";

function About({ content }) {
  const { portrait } = content.images;

  return (
    <div className='flex flex-col w-screen h-screen'>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-full w-full gap-10 p-5 lg:flex-row'>
        <div className='w-full'>
          <img
            src={portrait.src}
            alt={portrait.name}
            className='w-full opacity-80'
          />
        </div>

        <div className='w-full'>
          <h2 className='text-2xl font-semibold text-center md:text-3xl'>
            About me.
          </h2>
          <p className='opacity-75 pt-10 md:text-lg 2xl:w-2/3 mx-auto tracking-wide'>
            My name is Brody, I'm a 21 year old from Sydney who bought an
            embroidery machine to make cool custom jumper for my friends. This
            quickly turned into a business opportunity, hence why you're now
            reading this!
            <br />
            <br />
            They're all done in house (literally), hand made by myself and
            shipped Australia wide. If you have any questions or order
            enquiries, get in contact and I'll do my best to sort you out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
