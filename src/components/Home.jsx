import React, { useState, useRef, useEffect } from "react";
import { citiesInIndia } from "../databases/Cities";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [toStation, setToStation] = useState("");
  const [fromStation, setFromStation] = useState("");
  const [toDate, setDate] = useState("");
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [toSearchTerm, setToSearchTerm] = useState("");
  const [fromSearchTerm, setFromSearchTerm] = useState("");
  // const [showResults, setShowResults] = useState(false);

  const toDropdownRef = useRef(null);
  const fromDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target)) {
        setIsToDropdownOpen(false);
      }
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target)) {
        setIsFromDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate= useNavigate();
  const search=()=>{
    navigate("/search", { state: { fromStation, toStation,toDate } })
  }

  const handleSearch = () => {
    if (fromStation && toStation && toDate) {
      alert(`Searching trains from ${fromStation} to ${toStation} on ${toDate}`);
      // setShowResults(true); // Show search results outside searchbar div
        search()
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleToOptionClick = (option) => {
    setToStation(option);
    setIsToDropdownOpen(false);
    setToSearchTerm("");
  };

  const handleFromOptionClick = (option) => {
    setFromStation(option);
    setIsFromDropdownOpen(false);
    setFromSearchTerm("");
  };

  const filteredToOptions = citiesInIndia
    .filter((option) =>
      option.toLowerCase().startsWith(toSearchTerm.toLowerCase())
    )
    .sort();

  const filteredFromOptions = citiesInIndia
    .filter((option) =>
      option.toLowerCase().startsWith(fromSearchTerm.toLowerCase())
    )
    .sort();

  return (
    <div className="relative  bg-my-img bg-fixed bg-cover bg-center h-screen flex flex-col justify-center items-center pt-10">
       <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/photos/1321208-uhd_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
      />
       {/* <div className="absolute inset-0 bg-black opacity-50"></div>  */}

     
      <div className="relative rounded-xl max-w-4xl w-full bg-white shadow-xl flex flex-col justify-center items-center text-center py-12 px-6 md:px-12 lg:px-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-6">
          Welcome to Our Website TRELO!
        </h1>
        <div className="flex text-xl text-semibold flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6 w-full">

         
          <div ref={fromDropdownRef} className="relative w-full lg:w-full">
            <input
              type="text"
              value={fromSearchTerm || fromStation}
              onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
              onChange={(e) => setFromSearchTerm(e.target.value)}
              placeholder="Select From Station"
              className="p-3 h-16 text-2xl w-52 font-semibold rounded-lg border border-gray-300 shadow-lg hover:bg-slate-200 duration-300"
            />
  
            {isFromDropdownOpen && filteredFromOptions.length > 0 && (
              <ul className="absolute z-10 mt-2 w-full max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
                {filteredFromOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleFromOptionClick(option)}
                    className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          
          <div ref={toDropdownRef} className="relative w-full lg:w-full">
            <input
              type="text"
              value={toSearchTerm || toStation}
              onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
              onChange={(e) => setToSearchTerm(e.target.value)}
              placeholder="Select To Station"
              className="p-3 h-16 text-2xl w-52 font-semibold rounded-lg border border-gray-300 shadow-lg hover:bg-slate-200 duration-300"
            />

            {isToDropdownOpen && filteredToOptions.length > 0 && (
              <ul className="absolute z-10 mt-2 w-full max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
                {filteredToOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleToOptionClick(option)}
                    className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

         
          <input
            type="date"
            value={toDate}
            onChange={(e) => setDate(e.target.value)}
            placeholder="dd-mm-yy"
            className="p-3 text-2xl w-52 font-semibold text-gray-400 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 hover:bg-slate-200 focus:ring-black transition duration-300 bg-white lg:h-16"
          />

         
          <button
            onClick={handleSearch}
            className="bg-cyan-300 font-semibold text-2xl text-black rounded-lg px-6 py-2 shadow-cyan-500 shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200 transition duration-300 w-full lg:w-auto"
          >
            SEARCH
          </button>
        </div>
      </div>

 


    </div>
  );
};

export default Home;
