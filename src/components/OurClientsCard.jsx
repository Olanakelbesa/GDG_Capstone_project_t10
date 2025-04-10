import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const OurClientsCard = ({ image, name, role, rating, review }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-sm w-[339px] h-[400px] mx-auto flex flex-col items-center text-center px-6 pt-20 pb-10 relative">
      {/* Profile Image */}
      <img
        src={image} // Use the dynamic image passed as prop
        alt={name} // Use the name for alt text
        className="h-[120px] w-[120px] rounded-full object-cover shadow-md absolute -top-16"
      />

      {/* Name & Role */}
      <h2 className="text-2xl font-bold mt-4">{name}</h2>
      <p className="text-[#858585] text-sm mb-4">{role}</p>

      {/* Stars */}
      <div className="mt-[50px] m-5">
        <div className="flex gap-1 text-yellow-400 text-2xl mb-4">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-500 text-sm text-start">{review}</p>
      </div>
    </div>
  );
};

// Define prop types for the component
OurClientsCard.propTypes = {
  image: PropTypes.string.isRequired, // The image URL should be a string
  name: PropTypes.string.isRequired, // The name should be a string
  role: PropTypes.string.isRequired, // The role should be a string
  rating: PropTypes.number.isRequired, // The rating should be a number
  review: PropTypes.string.isRequired, // The review should be a string
};

export default OurClientsCard;
