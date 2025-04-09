import { useState } from "react";
import ChooseCard from "./ChooseCard";
import HumanIcon from "../assets/human-icon.png";
import PriceIcon from "../assets/price-icon.png";
import HandpickedIcon from "../assets/handpicked-icon.png";
import OurServiceBg from "../assets/our-service.png";

const Choose = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { icon: HumanIcon, name: "Best Service" },
    { icon: PriceIcon, name: "Price Guarantee" },
    { icon: HandpickedIcon, name: "Handpicked Hotels" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-12 sm:mt-[87px] pt-10 sm:pt-[50px] px-4 sm:px-8 md:px-[70px] relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={OurServiceBg}
          alt="services"
          className="w-full h-full object-cover blur-xs"
        />
        <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[132px] bg-white"></div>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-1 mb-8 sm:mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
          Why choose Us?
        </h1>
        <p className="text-white text-sm sm:text-base text-center px-2">
          our services have been trusted by world travelers
        </p>
      </div>

      {/* Buttons for small screens */}
      <div className="flex justify-between z-10 mb-6">
        <button
          onClick={handlePrev}
          className="w-8 sm:w-10 h-8 sm:h-10 !bg-white flex items-center justify-center border rounded-xl shadow-sm"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="w-8 sm:w-10 h-8 sm:h-10 !bg-white flex items-center justify-center border rounded-xl shadow-sm"
        >
          &gt;
        </button>
      </div>

      {/* Single Card Carousel - only on small screens */}
      <div className="md:hidden flex justify-center items-center relative z-10">
        <ChooseCard icon={cards[currentIndex].icon} />
      </div>

      {/* Multiple Cards - only on medium and up */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-4 z-10 relative">
        {cards.map((card, index) => (
          <ChooseCard key={index} icon={card.icon} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default Choose;
