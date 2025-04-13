import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-main.png";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [showDesktopSearch, setShowDesktopSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function toggleMenu() {
    setMenu(!menu);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      // navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setShowDesktopSearch(false);
      setMenu(false);
    }
  }

  function handleMobileLinkClick() {
    setMenu(false);
  }

  const linkClasses =
    "text-xs text-gray-100 hover:text-white hover:underline transition cursor-pointer";

  return (
    <>
      {/* Main Navigation Bar */}
      <div className="flex flex-wrap justify-between items-center p-4 bg-gray-950/50 relative z-50 font-['montserrat']">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-30 invert md:w-50 lg:w-60 cursor-pointer"
            src={logo}
            alt="logo of the company"
          />
        </Link>

        {/* Desktop Menu (lg screens and up) */}
        <div className="hidden lg:flex lg:flex-row lg:gap-10 items-center">
          <Link to="/" className={`${linkClasses} font-bold`}>Home</Link>
          <Link to="/package" className={`flex items-center gap-1 ${linkClasses}`}>
            Package <IoIosArrowDown className="text-white" />
          </Link>
          <Link to="/blog" className={`flex items-center gap-1 ${linkClasses}`}>
            Blog <IoIosArrowDown className="text-white" />
          </Link>
          <Link to="/about" className={`flex items-center gap-1 ${linkClasses}`}>
            About us <IoIosArrowDown className="text-white" />
          </Link>
          <Link to="/contact" className={`flex items-center gap-1 ${linkClasses}`}>
            Contact <IoIosArrowDown className="text-white" />
          </Link>

          {/* Desktop Search */}
          <div className="relative ml-4">
            {!showDesktopSearch ? (
              <IoIosSearch
                onClick={() => setShowDesktopSearch(true)}
                className="size-5 text-gray-100 cursor-pointer hover:text-white"
              />
            ) : (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white rounded px-2 py-1"
              >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-gray-900 text-xs bg-transparent focus:outline-none"
                  placeholder="Search..."
                  autoFocus
                />
                <button type="submit">
                  <IoIosSearch className="size-4 text-gray-600 cursor-pointer ml-1" />
                </button>
                <IoMdClose
                  onClick={() => setShowDesktopSearch(false)}
                  className="size-4 text-gray-600 cursor-pointer ml-1"
                />
              </form>
            )}
          </div>
        </div>

        {/* Tablet Search Bar (sm to md screens) */}
        <div className="hidden sm:flex lg:hidden items-center">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-gray-900 text-xs pl-2 pr-1 py-1 bg-white w-40 rounded-sm focus:outline-none"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <IoIosSearch className="size-5 text-white" />
            </button>
          </form>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden ml-auto">
          {menu ? (
            <IoMdClose
              onClick={toggleMenu}
              className="text-white size-6 cursor-pointer"
            />
          ) : (
            <IoMdMenu
              onClick={toggleMenu}
              className="text-white size-6 cursor-pointer"
            />
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {menu && (
          <div className="absolute right-[2.5vw] top-full mt-2 bg-gray-800/95 z-50 flex flex-col items-center gap-2 p-3 rounded-md w-[95vw] lg:hidden">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-1 w-full mb-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow text-gray-900 text-xs pl-2 pr-1 py-1 bg-white rounded-sm focus:outline-none"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <IoIosSearch className="size-5 text-white" />
              </button>
            </form>

            {/* Mobile Links */}
            <Link
              to="/"
              onClick={handleMobileLinkClick}
              className={`p-2 text-center w-full rounded-sm hover:bg-gray-900/50 ${linkClasses}`}
            >
              Home
            </Link>
            <Link
              to="/package"
              onClick={handleMobileLinkClick}
              className={`p-2 text-center w-full rounded-sm hover:bg-gray-900/50 ${linkClasses}`}
            >
              Package
            </Link>
            <Link
              to="/blog"
              onClick={handleMobileLinkClick}
              className={`p-2 text-center w-full rounded-sm hover:bg-gray-900/50 ${linkClasses}`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              onClick={handleMobileLinkClick}
              className={`p-2 text-center w-full rounded-sm hover:bg-gray-900/50 ${linkClasses}`}
            >
              About us
            </Link>
            <Link
              to="/contact"
              onClick={handleMobileLinkClick}
              className={`p-2 text-center w-full rounded-sm hover:bg-gray-900/50 ${linkClasses}`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
