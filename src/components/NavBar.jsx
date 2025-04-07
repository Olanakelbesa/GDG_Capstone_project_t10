import logo from "../assets/logo-main.png";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center">
      <img className="invert" src={logo} alt="logo of the company" />
      <p>Home</p>
      <div className="flex flex-row gap-12 px-8 items-center ">
        <button className="flex flex-row items-end">
          <p className="text-white">Package</p>
          <IoIosArrowDown className="text-white" />
        </button>
        <button className="flex flex-row items-end">
          <p className="text-white">Destination</p>
          <IoIosArrowDown className="text-white" />
        </button>
        <button className="flex flex-row items-end">
          <p className="text-white">Blog</p>
          <IoIosArrowDown className="text-white" />
        </button>
        <button className="flex flex-row items-end">
          <p className="text-white">Contact</p>
          <IoIosArrowDown className="text-white" />
        </button>
        <IoIosSearch className="size-4 text-white" />
      </div>
    </div>
  );
}

export default NavBar;
