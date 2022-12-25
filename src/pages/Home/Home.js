import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Sale from "../../components/home/Sale/Sale";

const Home = () => {
  return (
    <div className="w-full mx-auto mb-52">
      <Banner />
      <BannerBottom />
      <Sale />
    </div>
  );
};

export default Home;
