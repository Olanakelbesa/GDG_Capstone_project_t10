import React, { useState } from "react";
import OurClientsCard from "./OurClientsCard";
import kausan from "../assets/kausan.jfif";
import cristian from "../assets/cristian.jfif";
import sara from "../assets/sara.jfif";

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      image: kausan,
      name: "Leslie Howe",
      role: "Traveler",
      rating: 5,
      review:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      image: cristian,
      name: "Sara Jay",
      role: "Photographer",
      rating: 4,
      review:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      image: sara,
      name: "Alex Smith",
      role: "Explorer",
      rating: 4,
      review:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      image: kausan,
      name: "John Doe",
      role: "Traveler",
      rating: 5,
      review: "An unforgettable adventure!",
    },
    {
      image: cristian,
      name: "Jane Doe",
      role: "Explorer",
      rating: 4,
      review: "Such an amazing journey!",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Logic to get 3 clients at once for larger screens
  const displayedClients = [
    clients[currentIndex],
    clients[(currentIndex + 1) % clients.length],
    clients[(currentIndex + 2) % clients.length],
  ];

  return (
    <section className="py-16 h-screen mt-[133px]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="w-[597px] mb-12 justify-start text-start">
          <p className="text-gray-500 tracking-widest text-sm uppercase justify-start items-start">
            Testimonial
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-gray-500 text-sm">
            Create a visual identity for your company and an overall brand
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            className="w-10 !bg-white h-10 flex items-center justify-center border rounded-xl shadow-sm"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button
            className="w-10 !bg-white h-10 flex items-center justify-center border rounded-xl shadow-sm"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-6 bg-gradient-to-b from-white to-gray-100">
          {/* For larger screens, display 3 cards */}
          <div className="hidden lg:flex gap-6">
            {displayedClients.map((client, index) => (
              <OurClientsCard
                key={index}
                image={client.image}
                name={client.name}
                role={client.role}
                rating={client.rating}
                review={client.review}
              />
            ))}
          </div>

          {/* For medium and smaller screens, display 1 card at a time */}
          <div className="lg:hidden flex justify-center">
            <OurClientsCard
              image={clients[currentIndex].image}
              name={clients[currentIndex].name}
              role={clients[currentIndex].role}
              rating={clients[currentIndex].rating}
              review={clients[currentIndex].review}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
