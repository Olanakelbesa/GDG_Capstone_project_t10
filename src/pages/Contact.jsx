import React from "react";
import NavBar from "../components/NavBar"; // Adjust path if necessary
import Footer from "../components/Footer"; // Adjust path if necessary

// --- Import the background image ---
// Adjust the relative path '../assets/' based on the actual location
// of Contact.jsx relative to the src/assets folder.
// Example: If Contact.jsx is in src/pages/, use '../assets/'.
// Example: If Contact.jsx is in src/, use './assets/'.
import heroBackgroundImage from "../assets/unsplash_JFFvPHkGTyQ.png";
// --- End Image Import ---

const Contact = () => {
  return (
    <>
      {/* Navbar always at top */}
      <NavBar />

      {/* Fullscreen Hero Section with Background */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        // Use the imported image variable for the background
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        {/* Overlay and Text */}
        <div className="bg-black bg-opacity-50 text-white text-center p-8 sm:p-10 rounded-lg max-w-xl mx-4">
          {" "}
          {/* Added padding responsiveness and margin */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Let’s start a conversation. We’re here to help!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-50">
        {" "}
        {/* Changed bg slightly for contrast */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Form Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
            {" "}
            {/* Changed bg to white */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>{" "}
                {/* Added label for accessibility */}
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required // Added basic validation
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>{" "}
                {/* Added label */}
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>{" "}
                {/* Added label */}
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>{" "}
                {/* Added label */}
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200" // Enhanced button style
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We’d love to hear from you! Whether you have a question about
              features, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>

            <div className="space-y-6">
              {/* Example contact info - consider making this data-driven */}
              {[
                {
                  location: "Aceh Office",
                  phone: "+62 8243 6966",
                  email: "contact.aceh@domain.com",
                  address: "Jl. Darussalam Hagu Selatan, Aceh",
                },
                {
                  location: "Jakarta Office",
                  phone: "+62 21 1234 5678",
                  email: "contact.jakarta@domain.com",
                  address: "Jl. Sudirman Kav. 1, Jakarta",
                },
                {
                  location: "Surabaya Office",
                  phone: "+62 31 9876 5432",
                  email: "contact.surabaya@domain.com",
                  address: "Jl. Basuki Rahmat No. 10, Surabaya",
                },
              ].map((office, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 bg-white shadow-sm"
                >
                  {" "}
                  {/* Changed bg */}
                  <h4 className="font-semibold text-lg mb-2 text-gray-700">
                    {office.location}
                  </h4>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    📞 {office.phone}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    📧 {office.email}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    📍 {office.address}
                  </p>
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
