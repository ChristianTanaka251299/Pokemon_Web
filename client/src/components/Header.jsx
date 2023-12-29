import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/pokemon_logo.png";
import Profile from "../assets/pokeball_profile.jpg";

const Header = () => {
  return (
    <>
      <section className="sticky top-0 bg-white">
        <div className="container-screen flex  relative items-center justify-center lg:justify-between  py-3 ">
          <img src={Logo} alt="pokemon_logo.png" className="w-1/3 lg:w-[10%]" />
          <div className="hidden md:flex font-actor  w-1/2 justify-between">
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
          <div className="flex lg:relative items-center">
            <div className="hidden px-4 bg-slate-500 absolute right-6">
              <p>Guest</p>
            </div>
            <div className="absolute -right-3 md:relative md:right-0 rounded-full bg-blue-600 lg:w-9 w-9 lg:h-9 h-9 overflow-hidden">
              <img src={Profile} alt="profile_picture.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
