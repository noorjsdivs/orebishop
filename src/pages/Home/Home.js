import React from "react";
import Header from "../../components/home/Header";
import NavBottom from "../../components/home/NavBottom";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto">
        <Header />
      </div>
      <NavBottom />
    </div>
  );
};

export default Home;
