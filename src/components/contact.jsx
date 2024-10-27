const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex items-center justify-center px-4 mt-10">
      <div className="bg-white rounded-3xl shadow-lg max-w-4xl w-full p-10 sm:p-16 md:flex md:space-x-8">
        
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-4">
            We’re here to help you with anything you need. Fill out the form and our team will get back to you as soon as possible.
          </p>  
        </div>

        {/* Contact Form Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Contact Us</h2>
          <form id="contactForm" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition ease-in-out duration-200"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition ease-in-out duration-200"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition ease-in-out duration-200"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition ease-in-out duration-200"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition ease-in-out duration-200 shadow-md"
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
