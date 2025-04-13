import React from "react";
import contactImage from "./assets/contact-image.png";
import phoneIcon from "./assets/contact-icons/phone.png";
import emailIcon from "./assets/contact-icons/email.png";
import locationIcon from "./assets/contact-icons/location.png";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Contact = () => {
  return (
    <div className="bg-white text-black flex flex-col">
      <NavBar /> {/* Navigation Bar */}
      {/* Header - Optional */}
      {/* <Header /> */}
      <div className="relative  md:h-[40rem] lg:h-[50rem]">
        <div className="flex justify-center items-center h-full bg-no-repeat bg-cover bg-center">
          <img
            src={contactImage}
            alt="contact image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50"
        >
          <h4 className="text-4xl md:text-6xl font-bold text-white">Contact</h4>
          <a href="#" className="mt-4 text-white font-bold text-lg underline">
            Home
          </a>
        </div>
      </div>

      <div className="py-35 px-15 font-poppins bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-[580px_1fr] gap-8 justify-between font-light text-7xl">
          <div className="space-y-4 shadow-2xl  py-14 px-10 text-lg h-fit" >
           
            <form action="#" method="POST" className="space-y-6 ">
            
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                    h-[66px]
                   "
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
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                    h-[66px]"
                  />
                </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                    h-[66px]"
                />
              </div>
              <div>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="mt-1 block w-full  plpx-4 h-40 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-xl placeholder-[18px]"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black w-full h-16 text-white py-3 rounded-full text-3xl font-medium hover:bg-gray-700 "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4  px-10 text-lg">
{/* contact detail description text*/}
            <div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 m-8 text-left p-0">Get In Touch</h2>
          <p className=" ">Welcome Our beloved customer, this is our our contact information section You can access us in your choice, We are please to have you!</p>
          </div>

{/*contact detail information sections*/}
            <div className="grid grid-cols-1 gap-y-1 md:grid-cols-2 space-y-4  lg:h-[500px] lg:gap-x-8">
              {/* a1 card */}
                <div className="space-y-4">
                  <p className="text-gray-700">Abebe</p>
                  <div className="text-lg text-gray-700 flex gap-2">
                    <img src={phoneIcon} alt="phone" className="w-4 h-6"/> (123) 456-7890
                    </div>
                    <div className="text-lg text-gray-7 flex gap-2">
                  <img src={emailIcon} alt="location" className="w-4 h-6"/><p>conact@company.com</p>
                  </div>
                  <div className="text-lg text-gray-7 flex gap-2">
                  <img src={locationIcon} alt="location" className="w-4 h-6"/><p>123 Main Street,
                  City, Country</p>
                  </div>
                </div>
    
                {/* a2 card */}
                <div className="space-y-4">
                  <p className="text-gray-700">Bekele</p>
                  <div className="text-lg text-gray-700 flex gap-2">
                    <img src={phoneIcon} alt="phone" className="w-4 h-6"/> (123) 456-7890
                    </div>
                    <div className="text-lg text-gray-7 flex gap-2">
                  <img src={emailIcon} alt="location" className="w-4 h-6"/><p>conact@company.com</p>
                  </div>
                  <div className="text-lg text-gray-7 flex gap-2">
                  <img src={locationIcon} alt="location" className="w-4 h-6"/><p>123 Main Street,
                  City, Country</p>
                  </div>
                </div>
                {/* a3 card */}
                <div className="space-y-4">
                  <p className="text-gray-700">Chala</p>
                  <div className="text-lg text-gray-700 flex gap-2">
                    <img src={phoneIcon} alt="phone" className="w-4 h-6"/> (123) 456-7890
                    </div>
                    <div className="text-lg text-gray-7 flex gap-2">
                  <img src={emailIcon} alt="location" className="w-4 h-6"/><p>conact@company.com</p>
                  </div>
                  <div className="text-lg text-gray-7 flex gap-2">
                  <img src={locationIcon} alt="location" className="w-4 h-6"/><p>123 Main Street,
                  City, Country</p>
                  </div>
                </div>
                {/* a4 card */}
                <div className="space-y-4">
                  <p className="text-gray-700">Deriba</p>
                  <div className="text-lg text-gray-700 flex gap-2">
                    <img src={phoneIcon} alt="phone" className="w-4 h-6"/> (123) 456-7890
                    </div>
                    <div className="text-lg text-gray-7 flex gap-2">
                  <img src={emailIcon} alt="location" className="w-4 h-6"/><p>conact@company.com</p>
                  </div>
                  <div className="text-lg text-gray-7 flex gap-2">
                  <img src={locationIcon} alt="location" className="w-4 h-6"/><p>123 Main Street,
                  City, Country</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    <Footer/>
    </div>
  );
};

export default Contact;