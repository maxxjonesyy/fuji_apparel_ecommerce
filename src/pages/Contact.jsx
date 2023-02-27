import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import Navbar from "../components/Navbar";

function Contact() {
  const form = useRef();

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_17lxe2c",
        "template_3tncm2b",
        form.current,
        "iwCFiT7FYv44pEooo"
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Your email has been sent! We will be in touch soon.",
            icon: "success",
            confirmButtonColor: "#000000",
          });
        },
        (error) => {
          Swal.fire({
            title: `Error! ${error.text}`,
            text: "There has been an error with sending your email.",
            icon: "error",
            confirmButtonColor: "#000000",
          });
        }
      );
  }

  return (
    <div className='flex flex-col w-screen h-screen'>
      <Navbar />

      <div className='flex-1 p-5 flex flex-col justify-center items-center h-full w-full'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col items-center justify-center w-full h-[600px] shadow-lg rounded-md p-5 bg-gray-100 lg:w-[600px] lg:h-[800px]'
        >
          <label className='form-label'>Name</label>
          <input className='form-input' type='text' name='user_name' required />
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='user_email'
            required
          />
          <label className='form-label'>Message</label>
          <textarea className='form-input h-[150px]' name='message' required />
          <input className='button mt-10 ' type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
}

export default Contact;
