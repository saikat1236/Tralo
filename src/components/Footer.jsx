 // src/footer.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import {FaLinkedin} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-transparent  text-white py-8 px-4">
      <div className="container  text-center  ">
        <div className="flex flex-col lg:flex-row lg:ml-72 items-center mt-28  ">
          <input
            className="rounded-xl w-full max-w-md h-11 text-black pl-4 mb-4"
            type="email"
            placeholder="Enter Email"
          />
          <button className="bg-blue-700 shadow-blue-800 shadow-2xl text-white h-11 w-60 lg:w-20 lg:ml-4 lg:mb-4 max-w-xs rounded-xl hover:bg-blue-900 focus:ring-2 focus:ring-blue-400 transition duration-300 ">
            Submit
          </button>
        </div>
        <p className="pt-12">&copy; {new Date().getFullYear()} Diptanu and adwaita. All rights reserved.</p>
      </div>
      <div className=" text-xl ">
        <a className="" href="https://www.linkedin.com/in/diptanu-sarkar-0a209026a/"> <FaLinkedin className='text-blue-300' /></a>
      </div>
    </footer>
  );
};

export default Footer;
