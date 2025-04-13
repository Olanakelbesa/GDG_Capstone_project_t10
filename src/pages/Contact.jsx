import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      {/* Navbar always at top */}
      <NavBar />

      {/* Fullscreen Hero Section with Background */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/unsplash_JFFvPHkGTyQ.png')" }}
      >
        <div className="bg-black bg-opacity-50 text-white text-center p-10 rounded-lg max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Let’s start a conversation. We’re here to help!</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Form Section */}
          <div className="bg-gray-50 shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              We’d love to hear from you! Whether you have a question about features,
              pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              {["Aceh Office", "Jakarta Office", "Surabaya Office"].map((location, i) => (
                <div key={i} className="border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-semibold text-lg mb-2">{location}</h4>
                  <p className="flex items-center gap-2">📞 +62 8243 6966</p>
                  <p className="flex items-center gap-2">📧 contact@domain.com</p>
                  <p className="flex items-center gap-2">📍 Jl. Darussalam Hagu Selatan</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
