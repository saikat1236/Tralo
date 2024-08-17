 // src/footer.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col lg:flex-row lg:ml-96 items-center">
          <input
            className="rounded-xl w-full max-w-md h-11 text-black pl-4 mb-4"
            type="email"
            placeholder="Enter Email"
          />
          <button className="bg-blue-700   text-white h-11 w-60 lg:w-20 lg:ml-4 lg:mb-4 max-w-xs rounded-xl hover:bg-blue-900 transition duration-300">
            Submit
          </button>
        </div>
        <p className="pt-12">&copy; {new Date().getFullYear()} Diptanu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
