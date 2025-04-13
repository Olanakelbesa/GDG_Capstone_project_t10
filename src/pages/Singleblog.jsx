import Form_gdg from "../components/common/Form_gdg";
import Category_box from "../components/common/Category_box";
import Black_box from "../components/common/Black_box";
import Recent_posts from "../components/common/Recent_posts";
import Front from "../components/Front"
import NavBar from "../components/NavBar";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";




function Singleblog() {
    const currentDate = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });    

      const posts = [
        {
          img: "src/assets/unsplash_1XLyzi17Z2M (1).png",
          text: "Travel Stories for Now and the Future",
          date: currentDate,
        },
        {
          img: "src/assets/unsplash_hpTH5b6mo2s.png",
          text: "9 Popular Travel Destinations on Sale in 2022",
          date: currentDate,
        },
        {
          img: "src/assets/unsplash_Yui5vfKHuzs.png",
          text: "How Are We Going to Travel in 2022?",
          date: currentDate,
        },
      ];
  return (
    <>
      <div style={{
                    backgroundImage: "url('/src/assets/unsplash_NXET8dOlKHU.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center", 
                    height: "100vh",
                    position: "relative",
                  }}
                  className="relative font-['montserrat'] mb-20">
      <div className="absolute top-0 left-0 w-full">
        <NavBar />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
        <h1 className="text-4xl font-bold" >Travel Stories for now and the future</h1>
        <div className="flex flex-row justify-center items-center gap-10 mt-4 text-lg">
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
      
      <div className="flex flex-col lg:flex-row h-full p-4 rounded-lg w-full">
    
        <div className="flex-initial w-full lg:w-2/3 h-full bg-white p-4 rounded-lg">
          <div className="">
            <img src="src/assets/unsplash_1XLyzi17Z2M.png" alt="Beautiful lady in the center of the street" className="w-full rounded" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="my-14">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <img src="src/assets/unsplash_XbPG4k-KUwE.png" alt="Couples taking picture" className="w-full rounded my-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="flex justify-between mb-11">
            <div>
              <p>
                Tags:  <b>Destination, Travel</b>
              </p>
              
            </div>
            <div className="flex items-center">
              <p className="mr-3">Share This:</p>
              <FaFacebook className="m-3 text-3xl" />
              <AiFillTwitterCircle className="m-3 text-3xl" />
              <FaLinkedin className="m-3 text-3xl" />
            </div>
          </div>
          <hr className="opacity-15"/>
        </div>

        <div className="flex flex-col lg:w-1/3 lg:mx-10 mx-4">
          <div className="my-12 mr-0 bg-white">
            <h2 className="font-bold text-4xl">Recent Posts</h2>
            {posts.map((post, index) => (
              <Recent_posts key={index} img={post.img} text={post.text} date={post.date} />
            ))}
          </div>
          <div className="flex flex-col lg:flex-col space-y-4 lg:space-y-0 lg:space-x-4">
            <Category_box />
            <Black_box />
          </div>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 mt-10 px-4">
        <Form_gdg />
      </div>
      <Front />
    </>
  );
}


export default Singleblog;