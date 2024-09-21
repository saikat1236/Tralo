// eslint-disable-next-line no-unused-vars
import React from "react";

import {FaLinkedin} from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-transparent rounded-xl shadow-black shadow-2xl max-w-4xl mx-auto py-12 px-6 mt-32 mb-32">
      <h1 className='text-4xl font-extrabold text-center text-yellow-300 mb-8'>About Us</h1>
      <h2 className="text-5xl font-semibold text-center text-yellow-300  mb-12">Our Manager Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-48">
        <div className="relative flex flex-col items-center">
          <div className="absolute  left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 shadow-cyan-200 shadow-xl mt-[-7rem] overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <img className="w-full h-full object-cover" src="/src/photos/1702989116329.jpeg" alt="Saikat Biswas" />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-cyan-100 shadow-xl p-6 mt-20 text-center  w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-red-200">
            <h3 className="text-2xl font-bold text-gray-800 pt-16 mb-2">Saikat Biswas</h3>
            <p className="text-gray-600 font-semibold mb-2">Founder of Trelo, Project Manager, Founder & Tutor of INCLUDE-IT</p>
            <p className="text-gray-600">Saikat Biswas is a skilled Full Stack Web Developer at Drapo with expertise in leading projects and developing innovative solutions. An NIT graduate of 2023, he combines technical expertise with a strong problem-solving mindset to deliver high-quality web applications.</p>
            <a href="https://www.linkedin.com/in/saikat1236/" ><FaLinkedin className="size-6 rounded  text-blue-600"/> </a>
          </div>
        </div>

        <div className="relative  flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 mt-[-7rem] shadow-slate-600 shadow-xl  overflow-hidden rounded-full ">
              <img className="w-full h-full object-cover brightness-200" src="/src/photos/ankita.jpeg" alt="Ankita Debnath"  />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-black shadow-xl p-6 mt-20 text-center w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-gray-800 pt-16  mb-2">Ankita Debnath</h3>
            <p className="text-gray-600 font-semibold mb-2">Co-Founder of Trelo, Student of INCLUDE-IT</p>
            <p className="text-gray-600 pb-28">Ankita Debnath is a Frontend Web Developer currently pursuing a BTech in Electronics and Instrumentation Engineering at NIT Agartala.</p>
            <a href="https://www.linkedin.com/in/ankita-debnath-b74490266/"><FaLinkedin className="size-6 rounded  text-blue-600"/> </a>
          </div>
        </div>

        <div className="relative mt-36 flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 mt-[-7rem] shadow-slate-600 shadow-xl overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <img className="w-full h-full object-cover" src="/src/photos/Diptanu.jpeg" alt="Diptanu Sarkar" />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-black shadow-xl p-6 mt-20 text-center w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-gray-800 pt-16 mb-2">Diptanu Sarkar</h3>
            <p className="text-gray-600 font-semibold mb-2">Co-Founder of Trelo, Student of INCLUDE-IT</p>
            <p className="text-gray-600">Diptanu Sarkar is a MERN Stack Developer currently studying in the EE Department at NIT Agartala.</p>
            <a href="https://www.linkedin.com/in/diptanu-sarkar-0a209026a/"><FaLinkedin className="size-6 rounded  text-blue-600"/> </a>
          </div>
        </div>

        <div className="relative mt-36 flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 mt-[-7rem] shadow-slate-600 shadow-xl overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img className="w-full h-full object-cover" src="/src/photos/Dhritiman.jpeg" alt="Dhritiman Roy" />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-black shadow-xl p-6 mt-20 text-center w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-gray-800 pt-16  mb-2">Dhritiman Roy</h3>
            <p className="text-gray-600 font-semibold mb-2">Co-Founder of Trelo, Student of INCLUDE-IT</p>
            <p className="text-gray-600">Dhritiman Roy is a MERN Stack Developer currently studying in the EE Department at NIT Agartala.</p>
            <a href="https://www.linkedin.com/in/dhritiman-roy"><FaLinkedin className="size-6 rounded  text-blue-600"/> </a>
          </div>
        </div>
        
        <div className="relative mt-36 flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 mt-[-7rem] shadow-slate-600 shadow-xl overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <img className="w-full h-full object-cover" src="/src/photos/Adwaita.jpeg" alt="adwaita" />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-black shadow-xl p-6 mt-20 text-center w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-gray-800 pt-16 mb-2">Adwaita Karmakar</h3>
            <p className="text-gray-600 font-semibold mb-2">Co-Founder of Trelo, Student of INCLUDE-IT</p>
            <p className="text-gray-600">Adwaita Karmakar is a FrontEnd Web Developer currently studying in the Production Engineering Department at NIT Agartala.</p>
            <a href="https://www.linkedin.com/in/adwaita-karmakar-7a4988269/"><FaLinkedin className="size-6 rounded text-blue-600"/> </a>
          </div>
        </div>

        
        <div className="relative mt-36 flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 mt-[-7rem] shadow-slate-600 shadow-xl overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <img className="w-full h-full object-cover" src="/src/photos/Ash.jpg" alt="asmita" />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-black shadow-xl p-6 mt-20 text-center w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-gray-800 pt-16 mb-2">Asmita Banik </h3>
            <p className="text-gray-600 font-semibold mb-2">Co-Founder of Trelo, Student of INCLUDE-IT</p>
            <p className="text-gray-600">Asmita Banik is a MERN STACK  Developer currently studying in the CSE Department at NIT Agartala.</p>
            <a href="https://www.linkedin.com/in/asmita-banik-343675272/"><FaLinkedin className="size-6 rounded  text-blue-600"/> </a>
          </div>
        </div>

        <div className="relative mt-36 flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 mt-[-7rem] shadow-slate-600 shadow-xl overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img className="w-full h-full object-cover" src="/src/photos/bhatta.jpeg" alt="deeptanu" />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-black shadow-xl p-6 mt-20 text-center w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-gray-800 pt-16 mb-2">Deeptanu Bhatta 🐮 </h3>
            <p className="text-gray-600 font-semibold mb-2">Co-Founder of Trelo, Student of INCLUDE-IT</p>
            <p className="text-gray-600">Deeptanu Bhatta is a FULl STACK Web Developer currently studying in the Electrical Engineering Department at NIT Agartala.</p>
            <a href="https://www.linkedin.com/in/deeptanu-bhatta-a0788925b/"><FaLinkedin className="size-6 rounded  text-blue-600"/> </a>
          </div>
        </div>

        
        <div className="relative mt-36 flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-64 h-64 mt-[-7rem] shadow-slate-600 shadow-xl overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img className="w-full h-full object-cover" src="/src/photos/Tam.jpeg" alt="tamanna" />
            </div>
          </div>
          <div className="bg-red-100 rounded-lg shadow-black shadow-xl p-6 mt-20 text-center w-full max-w-sm relative z-0 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-gray-800 pt-16 mb-2">Tamanna Das Talukdar</h3>
            <p className="text-gray-600 font-semibold mb-2">Co-Founder of Trelo, Student of INCLUDE-IT</p>
            <p className="text-gray-600">Tamanna is a MERN STACK  Developer currently studying in the PE Department at NIT Agartala.</p>
            <a href="https://www.linkedin.com/in/tamanna-das-talukdar-13419222a/"><FaLinkedin className="size-6 rounded  text-blue-600"/> </a>
          </div>
        </div>

      </div>
      <div className="text-center mt-12">
        <a href="/" className="bg-teal-600 text-white py-3 px-6 rounded-full shadow-teal-800 shadow-lg hover:bg-teal-500 focus:ring-2 focus: ring-teal-300 transition duration-300">
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default About;