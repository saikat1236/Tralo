// src/components/Contact.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';

const Services = () => {
  return (
    <section className="  bg-gradient-to-br from-cyan-300 via-slate-200 to-purple-300 pt-4 mt-32 mb-20  shadow-black shadow-2xl py-12 px-6 md:py-16 md:px-12 rounded-lg max-w-5xl mx-auto">
      <h1 className=" text-4xl font-extrabold text-center  text-gray-800 mb-6 tracking-wide leading-tight">
        Our Services
        <p className="text-2xl mt-2 font-semibold text-gray-700">Redefining Train Route Navigation</p>
      </h1>
      
      <div className="text-lg text-gray-700 leading-relaxed mb-6">
        <img src='src/photos/unnamed.png' className='rounded shadow-lg shadow-black mb-6'/>
        <p className="mb-4">
          At <span className="font-bold text-teal-600">Trelo</span>, we are committed to revolutionizing how you plan your train journeys. 
          Traditional train route websites often leave you stranded if no direct route exists. They simply display <em className="text-red-600">“No routes available”</em>, 
          which limits your ability to reach your destination efficiently.
        </p>
        
        <p className="mb-4">
          Our platform offers a comprehensive solution to this problem:
        </p>
        
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <span className="font-bold">All Possible Routes:</span> We don’t stop at showing available direct trains. We explore every potential route, 
            including options that require station changes, ensuring you can still reach your destination even when a direct train is unavailable.
          </li>
          <li>
            <span className="font-bold">Optimized for Time and Distance:</span> Our smart algorithm minimizes travel time and distance, finding the most 
            efficient paths based on your preferences. Whether it's a single transfer or multiple, we provide the best route options to suit your needs.
          </li>
          <li>
            <span className="font-bold">User-Centric Experience:</span> We empower you with full control over your journey. Not only do we display direct trains, 
            but also alternate paths involving station transfers. This way, you can make the best travel decision tailored to your needs.
          </li>
          <li>
            <span className="font-bold">Never Get Stuck:</span> With Trelo, no journey is impossible. If direct trains aren’t available, 
            we provide alternatives with transfer points, so you always have a way to complete your trip.
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-teal-600 mb-4 text-center">Plan smarter, travel better</h2>
        <p className="text-gray-700 text-center">
          Whether it’s a straightforward ride or a multi-station transfer, Trelo ensures you get the most efficient travel experience.
        </p>
      </div>

      <div className="text-center">
        <a href="/" className="bg-teal-600 text-white py-3 px-8 rounded-full inline-block hover:bg-teal-500 transition duration-300 focus:ring-4 focus:ring-teal-300 shadow-lg">
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default Services;


