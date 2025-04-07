import { useState } from "react";
import logo from "../assets/logo-main.png";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
function NavBar() {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 bg-gray-950/50 relative font-['montserrat'] ">
        <img
          className="w-30 invert md:w-40 lg:w-60"
          src={logo}
          alt="logo of the company"
        />
        <p className="text-sm font-bold text-gray-100 hidden lg:inline">Home</p>
        <div className=" lg:flex lg:flex-row lg:gap-16 hidden">
          <button className=" flex flex-row items-center gap-1">
            <p className=" text-gray-100 text-sm">Package</p>
            <IoIosArrowDown className="text-white" />
          </button>
          <button className="flex flex-row items-center gap-1">
            <p className=" text-sm  text-gray-100">Destination</p>
            <IoIosArrowDown className="text-white" />
          </button>
          <button className="flex flex-row items-center gap-1">
            <p className=" text-sm  text-gray-100">Blog</p>
            <IoIosArrowDown className="text-white" />
          </button>
          <button className="flex flex-row items-center gap-1">
            <p className=" text-sm  text-gray-100">Contact</p>
            <IoIosArrowDown className="text-white" />
          </button>
          <IoIosSearch className="size-5 text-gray-100" />
        </div>
        <div className=" hidden sm:visible sm:flex sm:flex-row sm:gap-1 lg:hidden">
          <input
            className="text-gray-900 text-xs pl-1 bg-white w-50 rounded-sm"
            placeholder="search..."
          />
          <IoIosSearch className="size-8 text-white bg-gray-800 p-2 rounded-full" />
        </div>
        <IoMdMenu
          onClick={toggleMenu}
          className="text-white size-5 md:size-6 cursor-pointer lg:hidden"
        />
        <p className="font-bold text-white hidden">Home</p>

        {menu && (
          <div className="bg-gray-800/80 flex flex-col items-center gap-2 p-3 rounded-md w-40 absolute top-14 right-6">
            <button className="flex flex-row items-end bg-gray-500 cursor-pointer p-1 text-xs w-35 hover:bg-gray-900/50 rounded-sm">
              <p className="  text-gray-100">Package</p>
              {/* <IoIosArrowDown className="text-white" /> */}
            </button>
            <button className="flex flex-row items-end bg-gray-500 cursor-pointer p-1 text-xs w-35 hover:bg-gray-900/50  rounded-sm">
              <p className="  text-gray-100">Destination</p>
              {/* <IoIosArrowDown className="text-white" /> */}
            </button>
            <button className="flex flex-row items-end bg-gray-500 cursor-pointer p-1 text-xs w-35 hover:bg-gray-900/50  rounded-sm">
              <p className="  text-gray-100">Blog</p>
              {/* <IoIosArrowDown className="text-white" /> */}
            </button>
            <button className="flex flex-row items-end bg-gray-500 cursor-pointer p-1 text-xs w-35 hover:bg-gray-900/50  rounded-sm">
              <p className="  text-gray-100">Contact</p>
              {/* <IoIosArrowDown className="text-white" /> */}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row absolute top-18 left-18 sm:hidden">
        <input
          className="text-gray-900 text-xs pl-1 bg-white "
          placeholder="search..."
        />
        <IoIosSearch className="size-8 text-white bg-gray-800 p-2" />
      </div>
    </div>
  );
}

export default NavBar;
