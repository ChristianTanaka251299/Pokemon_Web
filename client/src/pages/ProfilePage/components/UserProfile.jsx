import React from 'react'
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import EmptyUser from "../../../assets/user_icon.jpg";

const userProfile = ({userInfo, setShowModal}) => {
  return (
    <section className="items-center lg:mt-12 lg:flex">
          {/* USERS PROFILE TEXT */}
          <div className="items-center justify-center my-4 flex">
            <div className="relative ">
              <h1 className="font-helvetica text-xl text-primaryBlue lg:hidden">
                User's Profile
              </h1>
              <button
                className="absolute -right-8 top-0  h-6 w-6 lg:hidden"
                onClick={() => alert("halo")}
              >
                <PencilSquareIcon className="h-6 w-6 transition duration-200 hover:text-slate-400" />
              </button>
            </div>
          </div>
          {/* PROFILE IMAGE */}
          <div className="flex flex-col items-center">
            <div className="relative h-36 w-36 lg:h-56 lg:w-56 overflow-hidden rounded-full bg-blue-200">
              <img src={EmptyUser} className="h-40 w-44 lg:h-60 lg:w-64" />
            </div>
            <button onClick={() => setShowModal(true)} className="my-4 rounded-md lg:rounded-sm bg-yellow-400 px-2 py-1  lg:py-2 font-helvetica text-white transition duration-200 hover:bg-primaryYellow">
              Change Profile Picture
            </button>
          </div>
          {/* PROFILE INFO */}
          <div className="mx-auto flex w-[78%] flex-col lg:w-[50%]">
            <div className="flex">
              <h1 className="mb-2 hidden font-helvetica text-2xl text-primaryBlue lg:block">
                User's Profile
              </h1>
              <button
                className="hidden  ml-6 h-6 w-6 lg:block"
                onClick={() => alert("halo")}
              >
                <PencilSquareIcon className="h-6 w-6 transition duration-200 hover:text-slate-400" />
              </button>
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
            <div className="grid grid-cols-3 items-center">
              <h2>Password :</h2>
              <button className="col-span-2 text-sm text-blue-300 transition duration-200 hover:text-slate-400">
                <p className="text-left">Change password</p>
              </button>
            </div>
          </div>
        </section>
  )
}

export default userProfile