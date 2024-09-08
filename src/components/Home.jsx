

// // eslint-disable-next-line no-unused-vars
import React from 'react';

const Home = () => {
  return (
    <div className="  mt-36 rounded-xl max-w-4xl mx-auto bg-transparent shadow-black shadow-xl flex flex-col justify-center items-center text-center py-12 px-6 ">
      <h1 className="text-3xl lg:text-5xl font-bold text-black mb-6 ">Welcome to Our Website!</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <input
          type="text"
          placeholder="Choose Station"
          className="p-3 rounded-lg border  border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
        />
        <input
          type="text"
          placeholder="Choose Destination Station"
          className="p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
        />
        <input
          type="date"
          className="p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
        />
        <button  className="bg-green-500 text-white rounded-lg px-6 py-2 shadow-green-700 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300  transition duration-300 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;





