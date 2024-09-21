
import React, { useState } from 'react';
import { citiesInIndia } from './Cities';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [tostation, setTostation] = useState("");
  const [fromstation, setFromstation] = useState("");
  const [todate, setDate] = useState("");

  const handleToChange = (e) => {
    setTostation(e.target.value);
  };

  const handleFromChange = (e) => {
    setFromstation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearch = () => {
    alert(`Searching trains from ${fromstation} to ${tostation} on ${todate}`);
  }
  
  const navigate= useNavigate();
  const search=()=>{
    navigate("/search", { state: { fromstation, tostation,todate } })
  }
   
  const handleClick =()=>{
    handleSearch();
    search();

  }

  return (
    <div className="mt-36 rounded-xl max-w-4xl mx-auto bg-transparent border-yellow-300 shadow-white shadow-xl flex flex-col justify-center items-center text-center text-black py-12 px-6">
      <h1 className="text-3xl lg:text-5xl font-bold text-yellow-300  mb-6">
        Welcome to Our Website!
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <select
          value={fromstation}
          onChange={handleFromChange}
          className="p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
        >
          <option value="" disabled>Select Station</option>
          {citiesInIndia.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        <select
          value={tostation}
          onChange={handleToChange}
          className="p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
        >
          <option value="" disabled>Select Destination Station</option>
          {citiesInIndia.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        <input
          type="date"
          value={todate}
          onChange={handleDateChange}
          className="p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
        />
        <button
          onClick={handleClick}
          className="bg-green-500 text-white rounded-lg px-6 py-2 shadow-green-700 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;


