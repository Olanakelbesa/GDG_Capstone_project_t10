import React from "react";

const ChooseCard = ({ icon, name }) => {
  return (
    <div className="w-[329px] h-[432px] m-6 pb-[70px] pl-[19px] bg-white rounded-xl shadow-xl flex flex-col items-start z-5  transition-transform duration-300 hover:scale-105">
      <img
        src={icon}
        className="h-[95px] w-[97px] rounded flex-start mb-[33px] mt-[44px]"
        alt="service icon"
      />
      <div className="flex flex-col text-start gap-[10px] mb-[38px] mr-[22px]">
        <h2 className="text-lg font-semibold mb-2 w-[148px] h-[34px] text-left">
          {name}
        </h2>
        <p className="text-[#858585] mb-4 text-left font-medium font-size-[18px] w-[280px] h-[78px]">
          Our service is reliable and <br /> convenient, our service is <br />
          quality.
        </p>
      </div>
      <a
        href="#"
        className="font-semibold !text-black flex items-center hover:underline"
      >
        <span className="font-bold">Learn more </span>
        <p className="ml-1 text-lg font-bold w-[29px] text-black">&rarr;</p>
      </a>
    </div>
  );
};

export default ChooseCard;
