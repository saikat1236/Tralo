
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'; // i react-icons in terminal


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl text-cyan-100 rounded-lg font-serif font-black ">Trelo</h1>
        <button
          className="show lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </button>
        <nav className={`lg:flex ${isOpen ? 'show' : 'hidden'} lg:space-x-6`}>{/*When isopen is false, only hidden is applied, hiding the menu.
      When show is true, show is applied and showmenu are visible */}
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            <li>
              <Link
                to="/"
                className="show text-lg py-2 lg:py-0 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="show text-lg py-2 lg:py-0 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="show text-lg py-2 lg:py-0 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
          
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
