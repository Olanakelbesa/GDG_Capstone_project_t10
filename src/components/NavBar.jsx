import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-main.png";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
function NavBar() {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }

  const linkClasses =
    "text-xs text-gray-100 hover:text-white hover:underline transition cursor-pointer";

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 bg-gray-950/50 relative font-['montserrat']">
        <img
          className="w-30 invert md:w-50 lg:w-60"
          src={logo}
          alt="logo of the company"
        />

        {/* HOME Link for larger screens */}
        <Link to="/" className={`${linkClasses} hidden lg:inline font-bold`}>
          Home
        </Link>

        {/* Desktop Menu */}
        <div className="lg:flex lg:flex-row lg:gap-16 hidden">
          <Link to="/package" className={`flex items-center gap-1 ${linkClasses}`}>
            Package <IoIosArrowDown className="text-white" />
          </Link>
          <Link to="/destination" className={`flex items-center gap-1 ${linkClasses}`}>
            Destination <IoIosArrowDown className="text-white" />
          </Link>
          <Link to="/blog" className={`flex items-center gap-1 ${linkClasses}`}>
            Blog <IoIosArrowDown className="text-white" />
          </Link>
          <Link to="/contact" className={`flex items-center gap-1 ${linkClasses}`}>
            Contact <IoIosArrowDown className="text-white" />
          </Link>
          <IoIosSearch className="size-5 text-gray-100 cursor-pointer" />
        </div>

        {/* Search bar for smaller devices */}
        <div className="hidden sm:visible sm:flex sm:flex-row sm:gap-1 lg:hidden">
          <input
            className="text-gray-900 text-xs pl-1 bg-white w-50 rounded-sm"
            placeholder="search..."
          />
          <IoIosSearch className="size-8 text-white bg-gray-800 p-2 rounded-full" />
        </div>

        {/* Menu icon for small screens */}
        <IoMdMenu
          onClick={toggleMenu}
          className="text-white size-5 md:size-6 cursor-pointer lg:hidden"
        />

        {/* Small screen dropdown menu */}
        {menu && (
          <div className="bg-gray-800/80 flex flex-col items-center gap-2 p-3 rounded-md w-40 absolute top-14 right-6">
            <Link to="/package" className={`p-1 w-35 rounded-sm hover:bg-gray-900/50 ${linkClasses}`}>
              Package
            </Link>
            <Link to="/destination" className={`p-1 w-35 rounded-sm hover:bg-gray-900/50 ${linkClasses}`}>
              Destination
            </Link>
            <Link to="/blog" className={`p-1 w-35 rounded-sm hover:bg-gray-900/50 ${linkClasses}`}>
              Blog
            </Link>
            <Link to="/contact" className={`p-1 w-35 rounded-sm hover:bg-gray-900/50 ${linkClasses}`}>
              Contact
            </Link>
          </div>
        )}
      </div>

      {/* Search bar visible below for very small screens */}
      <div className="flex flex-row absolute top-18 left-18 sm:hidden">
        <input
          className="text-gray-900 text-xs pl-1 bg-white"
          placeholder="search..."
        />
        <IoIosSearch className="size-8 text-white bg-gray-800 p-2" />
      </div>
    </div>
  );
}

export default NavBar;