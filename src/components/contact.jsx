import React from 'react';

const Contact = () => {
  return (
    <>
    <div>
    <div className=" mt-36  mb-36  bg-my-img bg-cover rounded-2xl max-w-5xl mx-auto flex justify-center items-center border-4 border-cyan-100 shadow-white shadow-xl">
      <div className=" ">
        <h1 className="text-3xl m-16 p-5    text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia ad adipisci atque neque exercitationem hic sit? Mollitia culpa dolores repudiandae autem quisquam, rem ducimus, sit pariatur voluptate, porro perferendis?</h1>
      </div>
      <div className="bg-transparent min-h-screen max-w-screen flex justify-center items-center text-cyan-100 p-5">
        <div className="contact-form bg-transparent ">
          <h2 className="text-3xl font-semibold text-amber-400 mb-4">Contact Us</h2>
          <form id="contactForm">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded-md mb-2 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300  "
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 border rounded-md mb-2 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 "
            />
            <label htmlFor="email">E-mail</label>
            <br/>
            <input
              type="email"
              id="email"
              name="email"
              className=" p-2 border rounded-md mb-2 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300  "
            />
            <br/>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded-md mb-4 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 "
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            />
          </form>
        </div>
      </div>
      </div>
      </div>
      <script>
        // Add JavaScript functionality here (e.g., form validation, submission handling)
      </script>
    </>
  );
};

export default Contact;
