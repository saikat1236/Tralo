

import React from 'react';
import { useLocation } from 'react-router-dom';

function Search( ) {
    const location=useLocation();
    const {fromStation ,toStation,toDate}=location.state
  return (
    <div className="relative mt-10 bg-white py-16 px-4 w-full flex justify-center items-center ">
    <div className="bg-gray-100 shadow-black py-12 px-6 rounded-lg flex flex-col gap-6 shadow-lg max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex justify-between items-center w-full text-xl font-semibold text-gray-800">
        <span>{fromStation} ➡️ {toStation}</span>
        <span>Travel Date: {toDate}</span>
      </div>
      
      {/* Route 1 */}
      <h1 className="text-lg font-semibold">Route: 1</h1>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 lg:gap-12 lg:flex-row justify-center items-center hover:scale-105 hover:bg-gray-200">
        {/* Dynamic Station 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
            {fromStation[0]}
          </div>
          <div className="mt-2 text-lg font-semibold">{fromStation}</div>
          <div className="text-sm text-gray-600">Dep: 07:30 AM</div>
          <div className="text-xs text-gray-500">Distance: 0 km</div>
        </div>
        
        {/* Arrow Line */}
        <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Dynamic Station 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">G</div>
          <div className="mt-2 text-lg font-semibold">Guwahati</div>
          <div className="text-sm text-gray-600">Arr: 12:30 PM</div>
          <div className="text-sm text-gray-600">Dep: 02:00 PM</div>
          <div className="text-xs text-gray-500">Distance: 450 km</div>
        </div>

        {/* Arrow Line */}
        <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Dynamic Station 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">{toStation[0]}</div>
          <div className="mt-2 text-lg font-semibold">{toStation}</div>
          <div className="text-sm text-gray-600">Arr: 10:00 PM</div>
          <div className="text-xs text-gray-500">Distance: 150 km</div>
        </div>
      </div>

      {/* Additional Train Info for Route 1 */}
      <div className="text-center lg:text-left text-gray-600 mt-4 lg:mt-0">
        <div>Duration: 14h 30m ({fromStation} ➡️ Guwahati ➡️ {toStation})</div>
        <div>Fare: ₹2000</div>
        <div className="">Distance covered: 600 km</div>
      </div>

      {/* Select Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-cyan-600 transition-all">Select</button>
      </div>

      {/* Route 2 */}
      <h1 className="text-lg font-semibold">Route: 2</h1>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 lg:gap-12 lg:flex-row justify-center items-center hover:scale-105 hover:bg-gray-200">
        {/* Dynamic Station 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
            {fromStation[0]}
          </div>
          <div className="mt-2 text-lg font-semibold">{fromStation}</div>
          <div className="text-sm text-gray-600">Dep: 08:00 AM</div>
          <div className="text-xs text-gray-500">Distance: 0 km</div>
        </div>
        
        {/* Arrow Line */}
        <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Dynamic Station 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">G</div>
          <div className="mt-2 text-lg font-semibold">Guwahati</div>
          <div className="text-sm text-gray-600">Arr: 12:00 PM</div>
          <div className="text-sm text-gray-600">Dep: 01:30 PM</div>
          <div className="text-xs text-gray-500">Distance: 450 km</div>
        </div>

        {/* Arrow Line */}
        <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Dynamic Station 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">K</div>
          <div className="mt-2 text-lg font-semibold">Kolkata</div>
          <div className="text-sm text-gray-600">Arr: 06:00 PM</div>
          <div className="text-xs text-gray-500">Distance: 700 km</div>
        </div>
        
            {/* Arrow Line */}
        <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Final Station */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">{toStation[0]}</div>
          <div className="mt-2 text-lg font-semibold">{toStation}</div>
          <div className="text-sm text-gray-600">Arr: 09:00 PM</div>
          <div className="text-xs text-gray-500">Distance: 150 km</div>
        </div>
      </div>

      {/* Additional Train Info for Route 2 */}
      <div className="text-center lg:text-left text-gray-600 mt-4 lg:mt-0">
        <div>Duration: 13h 00m ({fromStation} ➡️ Guwahati ➡️ Kolkata ➡️ {toStation})</div>
        <div>Fare: ₹2500</div>
        <div className="">Distance Covered: 1000 km</div>
      </div>

      {/* Select Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-cyan-600 transition-all">Select</button>
      </div>

      {/* Route 3 */}
      <h1 className="text-lg font-semibold">Route: 3</h1>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 lg:gap-12 lg:flex-row justify-center items-center hover:scale-105 hover:bg-gray-200">
        {/* Dynamic Station 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
            {fromStation[0]}
          </div>
          <div className="mt-2 text-lg font-semibold">{fromStation}</div>
          <div className="text-sm text-gray-600">Dep: 08:30 AM</div>
          <div className="text-xs text-gray-500">Distance: 0 km</div>
        </div>
        
        {/* Arrow Line */}
        <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Dynamic Station 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">G</div>
          <div className="mt-2 text-lg font-semibold">Guwahati</div>
          <div className="text-sm text-gray-600">Arr: 12:45 PM</div>
          <div className="text-sm text-gray-600">Dep: 01:15 PM</div>
          <div className="text-xs text-gray-500">Distance: 450 km</div>
        </div>

        {/* Arrow Line */}
        <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Dynamic Station 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">K</div>
          <div className="mt-2 text-lg font-semibold">Kolkata</div>
          <div className="text-sm text-gray-600">Arr: 07:00 PM</div>
          <div className="text-xs text-gray-500">Distance: 700 km</div>
        </div>

           {/* Arrow Line */}
           <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Final Station */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">D</div>
          <div className="mt-2 text-lg font-semibold">Durgapur</div>
          <div className="text-sm text-gray-600">Arr: 08:30 PM</div>
          <div className="text-xs text-gray-500">Distance: 150 km</div>
        </div>

           {/* Arrow Line */}
           <div className="relative w-20 lg:w-32 flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-[2px] w-full"></div>
          <svg className="absolute -right-2 w-6 h-6 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Final Station */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">{toStation[0]}</div>
          <div className="mt-2 text-lg font-semibold">{toStation}</div>
          <div className="text-sm text-gray-600">Arr: 10:00 PM</div>
          <div className="text-xs text-gray-500">Distance: 100 km</div>
        </div>
      </div>

      {/* Additional Train Info for Route 3 */}
      <div className="text-center lg:text-left text-gray-600 mt-4 lg:mt-0">
        <div>Duration: 13h 30m ({fromStation} ➡️ Guwahati ➡️ Kolkata ➡️ Durgapur ➡️ {toStation})</div>
        <div>Fare: ₹3000</div>
        <div className="">Distance Covered: 1100 km</div>
      </div>

      {/* Select Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-cyan-600 transition-all">Select</button>
      </div>

    </div>
  </div>
  );
}

export default Search;
