import NavBar from "../components/NavBar";
import LeaveComent_Form from "../components/common/LeaveComent_Form";
import Category_box from "../components/common/Category_box";
import Black_box from "../components/common/Black_box";
import Recent_posts from "../components/common/Recent_posts";
import Front from "../components/Front";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";

// --- Import Images ---
// Adjust the relative path '../assets/' if Singleblog.jsx is not in a direct subfolder of src (e.g., src/pages)
import heroBgImage from "../assets/unsplash_NXET8dOlKHU.png";
import blogImage1 from "../assets/unsplash_1XLyzi17Z2M.png";
import blogImage2 from "../assets/unsplash_XbPG4k-KUwE.png";
import recentPostImg1 from "../assets/unsplash_1XLyzi17Z2M (1).png";
import recentPostImg2 from "../assets/unsplash_hpTH5b6mo2s.png";
import recentPostImg3 from "../assets/unsplash_Yui5vfKHuzs.png";
// --- End Import Images ---

function Singleblog() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Use the imported image variables in the posts data
  const posts = [
    {
      img: recentPostImg1, // Use imported variable
      text: "Travel Stories for Now and the Future",
      date: currentDate,
    },
    {
      img: recentPostImg2, // Use imported variable
      text: "9 Popular Travel Destinations on Sale in 2022",
      date: currentDate,
    },
    {
      img: recentPostImg3, // Use imported variable
      text: "How Are We Going to Travel in 2022?",
      date: currentDate,
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <div
        style={{
          // Use the imported variable for the background image
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // Consider using min-height if content can push it taller
          height: "100vh", // Or maybe less like 60vh or 70vh? Full screen might be too much.
          position: "relative",
        }}
        className="relative font-['montserrat'] mb-20 flex flex-col" // Added flex-col for potential vertical alignment needs
      >
        {/* Navbar should be positioned correctly, maybe absolutely within this div */}
        <div className="absolute top-0 left-0 w-full z-20">
          {" "}
          {/* Ensure NavBar is above overlay if any */}
          <NavBar />
        </div>
        {/* Optional Overlay if needed for text contrast */}
        {/* <div className="absolute inset-0 bg-black/30 z-10"></div> */}

        {/* Centered Hero Content */}
        <div className="relative z-10 flex flex-grow flex-col items-center justify-center text-center text-white px-4">
          {" "}
          {/* Added flex-grow and padding */}
          <h1 className="text-4xl font-bold drop-shadow-md">
            {" "}
            {/* Adjusted drop shadow */}
            Travel Stories for now and the future
          </h1>
          <div className="flex flex-wrap flex-row justify-center items-center gap-x-6 gap-y-2 mt-4 text-lg drop-shadow-sm">
            {" "}
            {/* Added flex-wrap, adjusted gaps */}
            <span className="flex items-center gap-1">
              <IoPerson />
              Hasmar
            </span>
            <span className="flex items-center gap-1">
              <IoCalendarOutline />
              January 18, 2021
            </span>
            <span className="flex items-center gap-1">
              <FaRegFolderOpen />
              Stories, Tips
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        id="stories"
        className="flex flex-col lg:flex-row h-full p-4 lg:px-8 xl:px-16 w-full max-w-screen-xl mx-auto"
      >
        {" "}
        {/* Added padding & max-width */}
        {/* Blog Post Content */}
        <div className="flex-initial w-full lg:w-2/3 h-full bg-white p-4 md:p-6 rounded-lg shadow-md">
          {" "}
          {/* Added padding & shadow */}
          <div className="my-8 md:my-14">
            {" "}
            {/* Adjusted margin */}
            {/* Use imported variable for img src */}
            <img
              src={blogImage1}
              alt="Beautiful lady in the center of the street"
              className="w-full rounded mb-4"
            />
            <p className="text-gray-700 leading-relaxed">
              {" "}
              {/* Improved text styling */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="my-8 md:my-14">
            {" "}
            {/* Adjusted margin */}
            <h1 className="text-left font-semibold mt-3 mb-3 text-3xl md:text-4xl text-gray-800">
              {" "}
              {/* Improved heading style */}
              Rice Terraces, Tegallalang
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              {" "}
              {/* Improved text styling */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            {/* Use imported variable for img src */}
            <img
              src={blogImage2}
              alt="Couples taking picture"
              className="w-full rounded my-4"
            />
            <p className="text-gray-700 leading-relaxed">
              {" "}
              {/* Improved text styling */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-11 gap-4">
            {" "}
            {/* Added gap, responsive flex */}
            <div>
              <p className="text-gray-600">
                Tags: <b className="text-gray-800">Destination, Travel</b>
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {" "}
              {/* Added flex-wrap and gap */}
              <p className="mr-2 text-gray-600">Share This:</p>
              {/* Added hover effects */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://x.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-700 transition-colors"
              >
                <AiFillTwitterCircle className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          <hr className="opacity-15" />
        </div>
        {/* Sidebar */}
        <div className="flex flex-col w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 xl:ml-12">
          {" "}
          {/* Adjusted margin/spacing */}
          {/* Recent Posts Section */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
            {" "}
            {/* Styled container */}
            <h2 className="font-bold text-2xl md:text-3xl mb-4 text-gray-800">
              Recent Posts
            </h2>
            {/* Ensure Recent_posts component correctly uses the 'img' prop (which is now a URL) */}
            {posts.map((post, index) => (
              <Recent_posts
                key={index}
                img={post.img}
                text={post.text}
                date={post.date}
              />
            ))}
          </div>
          {/* Other Sidebar Components */}
          <div className="flex flex-col space-y-8">
            {" "}
            {/* Adjusted spacing */}
            <Category_box />
            <Black_box />
          </div>
        </div>
      </div>

      {/* Comment Form and Footer Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-16 w-full">
        {" "}
        {/* Centered container */}
        <div className="w-full lg:w-2/3 mt-10 mb-10">
          {" "}
          {/* Adjusted width and margin */}
          <LeaveComent_Form />
        </div>
        <Front /> {/* Assuming Front is the Footer */}
      </div>
    </>
  );
}

export default Singleblog;
