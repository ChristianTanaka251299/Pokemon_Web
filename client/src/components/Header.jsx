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
          <Link to="/login">
            <div className="flex items-center lg:relative">
              <p className="absolute right-6 hidden rounded-sm bg-slate-300 px-6 font-helvetica text-white lg:block">
                Guest
              </p>
              <div className="absolute -right-3 h-9 w-9 overflow-hidden rounded-full bg-blue-600 md:relative md:right-0 lg:h-9 lg:w-9">
                <img src={Profile} alt="profile_picture.jpg" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
