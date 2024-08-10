import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">Trelo</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-lg hover:text-gray-400 transition duration-300 shadow-slate-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-lg hover:text-gray-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-lg hover:text-gray-400 transition duration-300"
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
