// Header.js
import React from 'react';
import './Header.css'; // Optional: if you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
