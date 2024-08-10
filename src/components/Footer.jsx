// src/footer.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 py-4  w-full">
      <div className="container mx-auto text-center">
        <div  >
           
            
                <input className='rounded-xl w-80 h-11 text-black pl-4'  type="email" placeholder='Enter Email'/>  
                      
                <button className='bg-blue-700  shadow-slate-1 h-11 ml-4 w-20  rounded-xl hover:bg-blue-900 transition duration-300 shadow-lg'>Submit</button>
          

        </div>
        <p className='pt-12'>&copy; {new Date().getFullYear()} Diptanu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

