import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-white my-28 pb-10 px-6 md:px-12 lg:px-24 text-gray-800 max-w-6xl mx-auto shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="text-lg leading-relaxed mb-6 space-y-6">
        <p>
          At <span className="font-bold text-cyan-400">Trelo</span>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our platform. By accessing and using our services, you agree to the terms outlined in this policy.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
        <p>
          We collect personal data such as your name, email address, and travel preferences to provide better services. We may also collect information about how you use our platform, including the pages you visit and the links you click on.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To improve user experience and optimize our services.</li>
          <li>To process bookings and send notifications regarding your journey.</li>
          <li>To analyze data and trends to enhance platform performance.</li>
          <li>To communicate promotional offers, if you have opted to receive them.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Our platform uses SSL encryption to ensure that all information transmitted remains confidential.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us using the details provided below.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to the Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. If changes are made, they will be reflected on this page with the updated date.
        </p>
      </div>
      
      <div className="text-center mt-8">
        <a href="/contact" className="bg-cyan-400 text-black font-semibold py-3 px-8 rounded-full inline-block hover:bg-cyan-500 transition duration-300 focus:ring-4 focus:ring-cyan-300 shadow-lg">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
