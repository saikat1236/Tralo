// src/components/TermsOfService.jsx

import React from 'react';

const TermsOfService = () => {
  return (
    <section className="bg-white pt-8 mt-32 mb-20 shadow-black shadow-2xl py-12 px-6 md:py-16 md:px-12 rounded-lg max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide leading-tight">
        Terms of Service
        <p className="text-2xl mt-2 font-semibold text-gray-700">Your Agreement with Us</p>
      </h1>
      
      <div className="text-lg text-gray-700 leading-relaxed mb-6">
        <p className="mb-4">
          Welcome to <span className="font-bold text-cyan-400">Trelo</span>. These Terms of Service outline the rules and regulations for the use of our platform. 
          By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
        </p>
        
        <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our website, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
        </p>
        
        <h2 className="text-2xl font-bold text-black mb-4">2. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. Any changes will be posted on this page. Your continued use of our platform after changes are made constitutes acceptance of the revised Terms.
        </p>
        
        <h2 className="text-2xl font-bold text-black mb-4">3. User Conduct</h2>
        <p className="mb-4">
          You agree to use our platform only for lawful purposes. You must not use our services to engage in any fraudulent, illegal, or harmful activities.
        </p>
        
        <h2 className="text-2xl font-bold text-black mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for any damages or losses resulting from the use of our services. This includes, but is not limited to, any direct, indirect, incidental, or consequential damages.
        </p>
        
        <h2 className="text-2xl font-bold text-black mb-4">5. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to our platform at any time, without notice, if you breach these Terms or engage in unlawful behavior.
        </p>
        
        <h2 className="text-2xl font-bold text-black mb-4">6. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by and construed in accordance with the laws of the country where we operate. Any disputes arising from these Terms will be subject to the jurisdiction of the courts in that country.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="text-center mb-5">
        <a href="/contact" className="bg-cyan-400 text-black font-semibold py-3 px-8 rounded-full inline-block hover:bg-cyan-500 transition duration-300 focus:ring-4 focus:ring-cyan-300 shadow-lg">
          Contact Us
        </a>
      </div>
          <p className="text-gray-700 text-center">
            If you have any questions or concerns about these Terms, please feel free to contact us at support@trelo.com.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default TermsOfService;
