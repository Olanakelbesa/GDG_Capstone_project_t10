import React from "react";
import heroImg from "../assets/hero.png";

export default function HeroSection() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          About Us
        </h1>
        <p className="text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          Home &gt; About Us
        </p>
      </div>
    </div>
  );
}
