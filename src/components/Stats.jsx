import React from "react";
import statsBg from "../assets/stats.png"; 
import image4 from "../assets/stats1.png";
import image5 from "../assets/stats2.png";
import image6 from "../assets/stats3.png";
import image7 from "../assets/stats4.png";

export default function Stats() {
  const stats = [
    { image: image4, value: "126+", label: "Satisfied Clients" },
    { image: image5, value: "230+", label: "New Travellers" },
    { image: image6, value: "230+", label: "Destinations" },
    { image: image7, value: "230+", label: "Awards" },
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 text-white text-center"
      style={{ backgroundImage: `url(${statsBg})` }}
    >
      <div className="flex flex-col md:flex-row justify-evenly items-center px-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <img src={stat.image} alt={stat.label} className="w-12 h-12 mx-auto" />
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
