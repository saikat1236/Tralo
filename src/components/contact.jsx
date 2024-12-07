const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center mt-24 mb-10 px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl shadow-black max-w-5xl w-full p-10 sm:p-16 md:flex md:space-x-12">
        
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mt-6">
            We’re here to help. Fill out the form, and our support team will respond promptly to assist you with anything you need.
          </p>  
        </div>

        {/* Contact Form Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-cyan-400 mb-8">Contact Us</h2>
          <form id="contactForm" className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition duration-300"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition duration-300"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition duration-300"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 text-xl font-semibold text-black bg-cyan-400 rounded-lg hover:bg-cyan-200 transition duration-300 shadow-lg transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
