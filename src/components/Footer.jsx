import { FaLocationDot } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo-main.png";
function Footer() {
  return (
    <div>
      <div className="bg-[url(/src/assets/Footer-background.png)] bg-cover flex flex-col gap-8 p-4 pb-8">
        <div className="flex flex-col gap-8 text-center p-3 font-['Montserrat']">
          <p className="text-gray-50 text-3xl font-bold ">
            Subscribe to get special price
          </p>
          <p className="text-gray-50 text-xs sm:text-sm  ">
            Dont wanna miss something? subscribe right now and get special
            promotion and monthly newsletter
          </p>
        </div>
        <div className="flex flex-row justify-center font-['Montserrat'] gap-2 ">
          <input
            className="bg-white text-gray-600 p-3 rounded-full text-xs w-70 sm:text-sm md:w-100 "
            placeholder="Type your email here "
          />
          <button className=" text-gray-200 bg-gray-950 text-[10px] rounded-full w-20">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-6 my-4 flex-wrap md:justify-center md:gap-16 lg:gap-36">
        <img src={logo} alt="logo" className="w-40 " />
        <div className="font-['Montserrat'] flex flex-col gap-1 ">
          <p className="font-bold text-sm">Contact</p>
          <div className="flex flex-row gap-1 items-center">
            <FaLocationDot className="size-3" />
            <p className="text-[10px]">732 Despard St, Atlanta</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <AiFillMessage className="size-3" />
            <p className="text-[10px]">+97 888 8888</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <IoIosCall className="size-3" />
            <p className="text-[10px]">info@traveller.com</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:gap-1 ">
          <p className="font-bold text-sm font-['Montserrat']">Quick Link</p>
          <p className="text-xs text-gray-600">Home</p>
          <p className="text-xs text-gray-600">About us</p>
          <p className="text-xs text-gray-600">Tours</p>
          <p className="text-xs text-gray-600">Contact</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-['Montserrat'] font-bold">Follow us</p>
          <div className="flex flex-row gap-2">
            <FaFacebook className="size-3" />
            <FaXTwitter className="size-3" />
            <FaYoutube className="size-3" />
            <FaInstagram className="size-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
