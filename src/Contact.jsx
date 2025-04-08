import React from "react";

const Contact = () => {
  return (
    <div className="bg-white text-black flex flex-col">
      {/* Header - Optional */}
      {/* <Header /> */}
      <div className="relative h-96 md:h-[40rem] lg:h-[50rem]">
        <div className="flex justify-center items-center h-full bg-no-repeat bg-cover bg-center">
          <img
            src="assets/contact-image.png"
            alt="contact image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h4 className="text-4xl md:text-6xl font-bold text-white">Contact</h4>
          <a href="#" className="ml-8 text-white font-bold">
            Home
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Contact Information
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Phone:</span> (123) 456-7890
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Email:</span> contact@company.com
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Location:</span> 123 Main Street,
                City, Country
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4 mt-8 text-center">
        <div className="text-sm">© 2025 My Awesome Website. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default Contact;