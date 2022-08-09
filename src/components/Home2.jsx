import React from "react";
import bgHome from "../img/bg-home.jpg";

const Home2 = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-purple-900 to-green-700 h-screen w-full relative">
        <img
          src={bgHome}
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="max-w-7xl mx-auto px-4 p-20">
          <h1>Home</h1>
          <img src={bgHome} alt="fondo" className="h-20" />
        </div>
      </div>
    </>
  );
};

export default Home2;
