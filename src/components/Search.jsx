

import React from 'react';
import { useLocation } from 'react-router-dom';

function Search( ) {
    const location=useLocation();
    const {fromstation ,tostation,todate}=location.state
  return (
    <div className='bg-transparent py-8'>
      <div className="bg-gradient-to-br from-cyan-300 via-slate-200 to-purple-300 shadow-black shadow-2xl py-12 px-4 rounded-lg mt-28 items-center gap-4 flex justify-center flex-col sm:flex-row shadow-lg max-w-4xl mx-auto">
        
    
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 rounded-full h-4 w-4 relative z-10">
            <div className="absolute -bottom-6 text-xs font-semibold text-gray-800">{fromstation}</div>
            <div className="absolute -top-12 text-xs font-semibold text-gray-700">Date: {todate}</div>
          </div>
        </div>

      
        <div className="bg-black rounded-full h-[2px] w-full sm:w-32 transition-all duration-300"></div>

        
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 rounded-full h-4 w-4 relative z-10">
            <div className="absolute -bottom-6 text-xs font-semibold text-gray-800">Guwahati</div>
          </div>
        </div>

     
        <div className="bg-black rounded-full h-[2px] w-full sm:w-32 transition-all duration-300"></div>

       
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 rounded-full h-4 w-4 relative z-10">
            <div className="absolute -bottom-6 text-xs font-semibold text-gray-800">{tostation} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
