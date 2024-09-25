// src/Footer.jsx

import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Footer = () => {

  const navigate=useNavigate();
  return (
    <footer className="bg-gray-900  bottom-0 right-0 left-0 text-white py-12">
      <div className="container mx-auto px-4">
      
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Stay Connected</h2>
            <div className="flex">
              <input
                className="rounded-l-xl w-full max-w-md h-12 text-black px-4"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-cyan-400 shadow-lg text-black h-12 px-6 rounded-r-xl hover:bg-cyan-500 focus:ring-2 focus:ring-blue-400 transition duration-300">
                Send
              </button>
            </div>
          </div>
        
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/diptanu-sarkar-0a209026a/" aria-label="LinkedIn" className="hover:text-cyan-400 transition duration-300">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-cyan-400 transition duration-300">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-cyan-400 transition duration-300">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-cyan-400 transition duration-300">
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>

       
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Diptanu and Adwaita. All rights reserved.</p>
          </div>
       
          <div className="flex space-x-6 text-gray-400">
            <a href="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="/contact" className="hover:text-white transition duration-300">Contact Us</a>
            <a href="/about" className="hover:text-white transition duration-300">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
