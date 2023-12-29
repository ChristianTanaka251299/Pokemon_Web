import React from "react";
import Logo from "../assets/logo/pokemon_logo.png";
import Pokeball from "../assets/logo/pokeball.png";

const SplashScreen = () => {
  return (
    <div className="bg-primaryBlue h-screen">
      <div className="h-1/3"></div>
      <div className="h-1/3 flex items-center justify-center">
        <img src={Logo} alt="pokemon_logo.png" className="w-10/12 sm:w-1/3" />
      </div>
      <div className="h-1/3 flex">
        <hr className="sm:w-11/12  w-5/12 border-4 mt-auto mb-10" />
        <img
          src={Pokeball}
          alt="pokeball.png"
          className="animate-bounce w-10 mt-auto  mx-auto sm:mx-3 h-10 mb-6"
        />
        <hr className="sm:w-1/12 w-5/12 border-4 mt-auto mb-10" />
      </div>
    </div>
  );
};

export default SplashScreen;
