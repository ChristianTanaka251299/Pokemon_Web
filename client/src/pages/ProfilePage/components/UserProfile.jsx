import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { openModal } from "../../../reducers/modalSlice";
import EmptyUser from "../../../assets/user_icon.jpg";

const UserProfile = ({ userInfo }) => {
  const dispatch = useDispatch();
  return (
    <section className="items-center lg:mt-12 lg:flex">
      {/* USERS PROFILE TEXT */}
      <div className="my-4 flex items-center justify-center">
        <div className="relative ">
          <h1 className="font-helvetica text-xl text-primaryBlue lg:hidden">
            User's Profile
          </h1>
          <Link to="/profile/edit">
            <button className="absolute -right-8 top-0  h-6 w-6 lg:hidden">
              <PencilSquareIcon className="h-6 w-6 transition duration-200 hover:text-slate-400" />
            </button>
          </Link>
        </div>
      </div>
      {/* PROFILE IMAGE */}
      <div className="flex flex-col items-center">
        <div className="relative h-36 w-36 overflow-hidden rounded-full bg-blue-200 lg:h-56 lg:w-56">
          <img
            src={
              `${process.env.REACT_APP_AVATAR_BASE_URL}/${userInfo.profile_picture}` ||
              EmptyUser
            }
            className="h-40 w-44 lg:h-60 lg:w-64"
          />
        </div>
        <button
          onClick={() => dispatch(openModal())}
          className="my-4 rounded-md bg-yellow-400 px-2 py-1 font-helvetica  text-white transition duration-200 hover:bg-primaryYellow lg:rounded-sm lg:py-2"
        >
          Change Profile Picture
        </button>
      </div>
      {/* PROFILE INFO */}
      <div className="mx-auto flex w-[78%] flex-col lg:w-[50%]">
        <div className="flex">
          <h1 className="mb-2 hidden font-helvetica text-2xl text-primaryBlue lg:block">
            User's Profile
          </h1>
          <Link to="/profile/edit">
            <button className="ml-6  hidden h-6 w-6 lg:block">
              <PencilSquareIcon className="h-6 w-6 transition duration-200 hover:text-slate-400" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-3">
          <h2>Name :</h2>
          <p className="col-span-2 text-sm">
            {userInfo.first_name + " " + userInfo.last_name}
          </p>
        </div>
        <div className="grid grid-cols-3">
          <h2>UID :</h2>
          <p className="col-span-2 text-sm">{userInfo.uid}</p>
        </div>
        <div className="grid grid-cols-3 items-center">
          <h2>Email :</h2>
          <p className="col-span-2 text-xs">{userInfo.email}</p>
        </div>
        <div className="grid grid-cols-3 items-center">
          <h2>Status :</h2>
          <p className="col-span-2 text-sm">{userInfo.status}</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
