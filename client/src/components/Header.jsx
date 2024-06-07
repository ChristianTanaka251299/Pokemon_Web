import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/pokemon_logo.png";
import Profile from "../assets/pokeball_profile.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userInfo = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <section className="sticky top-0 z-40 bg-white drop-shadow-md">
        <div className="container-screen relative  flex items-center justify-center py-3  lg:justify-between ">
          <img
            src={Logo}
            alt="pokemon_logo.png"
            className="w-1/3 hover:cursor-pointer lg:w-[10%]"
            onClick={() => { navigate("/"); setOpen(false); }}
          />

          <div className="hidden w-1/2 justify-between  font-actor md:flex">
            <Link to="/">
              <p className="header-text">HOME</p>
            </Link>
            <Link to="/series">
              <p className="header-text">SERIES</p>
            </Link>
            <Link to="/pokemon">
              <p className="header-text">POKEMON</p>
            </Link>
          </div>
          {!userInfo.first_name ? (
            <Link to="/login">
              <div className="flex items-center lg:relative">
                <p
                  className={`absolute right-6 hidden rounded-sm ${
                    userInfo.first_name ? "bg-primaryBlue" : "bg-slate-300"
                  }  px-6 font-helvetica text-white lg:block`}
                >
                  {!userInfo.first_name ? "Guest" : userInfo.first_name}
                </p>
                <div className="absolute -right-3 h-9 w-9 overflow-hidden rounded-full bg-blue-600 md:relative md:right-0 lg:h-9 lg:w-9">
                  <img src={Profile} alt="profile_picture.jpg" />
                </div>
              </div>
            </Link>
          ) : (
            <>
              <button onClick={() => setOpen(!open)}>
                <div className="flex items-center lg:relative">
                  <p
                    className={`absolute right-6 hidden rounded-sm ${
                      userInfo.first_name ? "bg-primaryBlue" : "bg-slate-300"
                    }  px-6 font-helvetica text-white lg:block`}
                  >
                    {!userInfo.first_name ? "Guest" : userInfo.first_name}
                  </p>
                  <div className="absolute -right-3 h-9 w-9 overflow-hidden rounded-full bg-blue-600 md:relative md:right-0 lg:h-9 lg:w-9">
                    <img className="w-10 h-10" src={`${process.env.REACT_APP_AVATAR_BASE_URL}/${userInfo.profile_picture}`} alt="profile_picture.jpg" />
                  </div>
                </div>
              </button>
            </>
          )}
          {open && (
            <div className="absolute -bottom-28 right-0 w-5/12 rounded bg-white text-right  font-actor drop-shadow-md lg:w-3/12">
              <Link to={"/profile"} onClick={() => setOpen(false)}>
                <p className="mt-2 border-b pr-2 transition duration-150 hover:text-slate-300">
                  Profile
                </p>
              </Link>
              <Link>
                <p className="mt-2 border-b pr-2 transition duration-150 hover:text-slate-300">
                  Friends
                </p>
              </Link>
              <Link>
                <p className="mt-2 border-b pr-2 transition duration-150 hover:text-slate-300">
                  Logout
                </p>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
