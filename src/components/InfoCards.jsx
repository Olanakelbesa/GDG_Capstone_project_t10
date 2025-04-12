import React from "react";
import image1 from "../assets/infocards1.png";
import image2 from "../assets/infocards2.png";
import image3 from "../assets/infocards3.png";

export default function InfoCards() {
  const cards = [
    {
      image: image1,
      title: "Great team work",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra.",
    },
    {
      image: image2,
      title: "Our vision",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      image: image3,
      title: "Our mission",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-16 px-6 py-16 bg-white text-center">
      {cards.map((card, index) => (
        <div key={index} className="max-w-sm space-y-4">
          <img src={card.image} alt={card.title} className="w-16 h-16 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
