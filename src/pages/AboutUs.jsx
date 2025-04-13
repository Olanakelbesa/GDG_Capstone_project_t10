import React from "react";
import HeroSection from "../components/HeroSection";
import InfoCards from "../components/InfoCards";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AboutUs() {
  return (
    <div className="about-us">
        <NavBar/>
      <HeroSection />
      <InfoCards />
      <Testimonial />
      <Stats />
      <Gallery />
      <Footer />
    </div>
  );
}

export default AboutUs;