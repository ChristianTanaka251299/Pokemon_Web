import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/pokemon_logo.png";
import Profile from "../assets/pokeball_profile.jpg";

const Header = () => {
  return (
    <>
      <section className="sticky top-0 z-40 bg-white">
        <div className="container-screen relative  flex items-center justify-center py-3  lg:justify-between ">
          <img src={Logo} alt="pokemon_logo.png" className="w-1/3 lg:w-[10%]" />
          <p className="hidden lg:block absolute right-6 rounded-sm bg-slate-300 px-6 font-helvetica text-white">
            Guest
          </p>
          <div className="hidden w-1/2 justify-between  font-actor md:flex">
            <Link to="/">
              <p className="header-text">HOME</p>
            </Link>
            <Link to="/">
              <p className="header-text">SERIES</p>
            </Link>
            <Link to="/">
              <p className="header-text">POKEMON</p>
            </Link>
          </div>
          <div className="flex items-center lg:relative">
            <div className="absolute right-6 hidden bg-slate-500 px-4">
              <p>Guest</p>
            </div>
            <div className="absolute -right-3 h-9 w-9 overflow-hidden rounded-full bg-blue-600 md:relative md:right-0 lg:h-9 lg:w-9">
              <img src={Profile} alt="profile_picture.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
