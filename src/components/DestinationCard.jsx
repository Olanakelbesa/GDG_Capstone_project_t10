import React from "react";

const DestinationCard = ({ image, title, description }) => {
  return (
    <div className="group relative h-70 w-100 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105">
      <img className="w-full h-full object-cover" src={image} alt="places" />
      <div
        className="absolute top-[58%] z-10 right-4 w-10 h-10 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]
 flex items-center justify-center text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        “
      </div>

      <div className="flex-col font-['poppins'] text-[#000000] text-600 text-start justify-center pt-5 pl-2 h-25 absolute bottom-0 left-0 w-full bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="flex-start font-['poppins'] text-lg font-semibold text-gray-800">
          {title}
        </p>
        <span className="text-xs font-['poppins'] flex-start text-gray-400">
          {description}
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
