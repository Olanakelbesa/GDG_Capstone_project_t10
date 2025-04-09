import React from "react";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Explore from "../components/Explore";
import OurClients from "../components/OurClients";
import Partner from "../components/Partner";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Banner />
      <Explore />
      <Choose />
      <Partner />
      <OurClients />
    </div>
  );
};

export default Home;
