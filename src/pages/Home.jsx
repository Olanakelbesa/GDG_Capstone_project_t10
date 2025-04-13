import React from "react";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Explore from "../components/Explore";
import OurClients from "../components/OurClients";
import Partner from "../components/Partner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute w-full top-0 z-100 bg-transparent backdrop-blur-sm">
        <NavBar />
      </div>
      <Banner />
      <Explore />
      <Choose />
      <Partner />
      <OurClients />
      <div className="hidden sm:block h-12"></div>
      <div className="mt-20 sm:mt-60 h-auto pb-5">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
