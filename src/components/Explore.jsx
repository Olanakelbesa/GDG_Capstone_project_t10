import { useState } from "react";
import DestinationCard from "./DestinationCard";
import dest1 from "../assets/destination1.png";
import dest2 from "../assets/destination2.png";
import dest3 from "../assets/destination3.png";

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    {
      image: dest1,
      title: "Bali, Indonesia.",
      description:
        "Bali is a beautiful tourist spot and is visited by many travelers.",
    },
    {
      image: dest2,
      title: "Rome, Italy.",
      description:
        "A historic city filled with ancient architecture and culture.",
    },
    {
      image: dest3,
      title: "New York, USA.",
      description: "Explore the iconic skyline and vibrant lifestyle.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full flex flex-col mt-12 sm:mt-[90px] px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3">
        <h1 className="text-lg sm:text-xl md:text-5xl font-semibold text-black">
          Explore new worlds with <br className="sm:block hidden" /> exotic
          natural scenery
        </h1>
        <h3 className="text-sm sm:text-sm text-gray-500 max-w-md px-4">
          Explore the world with what you love beautiful natural beauty
        </h3>
      </div>

      {/* Buttons for small screens */}
      <div className="flex justify-between px-4 sm:px-10 py-4 sm:py-6 mt-2 ">
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded-xl shadow-sm bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          onClick={handlePrevious}
          aria-label="Previous destination"
        >
          &lt;
        </button>
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded-xl shadow-sm bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          onClick={handleNext}
          aria-label="Next destination"
        >
          &gt;
        </button>
      </div>

      {/* Carousel for small devices */}
      <div className="flex justify-center items-center min-h-[300px] w-full md:hidden">
        <div className="transition-all duration-300 transform">
          <DestinationCard
            image={destinations[currentIndex].image}
            title={destinations[currentIndex].title}
            description={destinations[currentIndex].description}
          />
        </div>
      </div>

      {/* Dots for small devices */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {destinations.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Grid of cards on medium+ devices */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5 mt-8">
        {destinations.map((dest, index) => (
          <DestinationCard
            key={index}
            image={dest.image}
            title={dest.title}
            description={dest.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
