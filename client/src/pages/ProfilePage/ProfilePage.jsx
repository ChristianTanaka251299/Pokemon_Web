import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import EmptyUser from "../../assets/user_icon.jpg";
import { useSelector } from "react-redux";
import axios from "axios";

const ProfilePage = () => {
  const userId = useSelector((state) => state.user.id);
  const [userInfo, setUserInfo] = useState([]);
  const [userFav, setUserFav] = useState([]);

  const getUserInfo = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/get/${userId}`,
    );
    setUserInfo(result.data.result);
    console.log(result.data.result);
  };

  const getUserFav = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/favorite/get`,
        {
          params: { user_id: userId },
        },
      );
      setUserFav(res.data.data);
      console.log("ini hasil", res.data.data);
    } catch (error) {
      console.log("Error fetching user favorites:", error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getUserFav();
  }, []);
  return (
    <>
      <section className="container-screen">
        <section>
          {/* USERS PROFILE TEXT */}
          <div className="my-4 flex items-center justify-center">
            <div className="relative ">
              <h1 className="font-helvetica text-xl text-primaryBlue">
                User's Profile
              </h1>
              <button
                className="absolute -right-8 top-0  h-6 w-6"
                onClick={() => alert("halo")}
              >
                <PencilSquareIcon className="h-6 w-6 transition duration-200 hover:text-slate-400" />
              </button>
            </div>
          </div>
          {/* PROFILE IMAGE */}
          <div className="flex flex-col items-center">
            <div className="relative h-36 w-36 overflow-hidden rounded-full bg-blue-200">
              <img src={EmptyUser} className="h-40 w-44" />
            </div>
            <button className="my-4 rounded-md bg-yellow-400 px-2 py-1 font-helvetica text-white transition duration-200 hover:bg-primaryYellow">
              Change Profile Picture
            </button>
          </div>
          {/* PROFILE INFO */}
          <div className="mx-auto flex w-[78%] flex-col">
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
        <section>
          <div className="flex items-center justify-center">
            <h1 className="my-4 font-helvetica text-xl text-primaryBlue">
              Favorite Pokémon 
            </h1>
          </div>
          {/* POKEMON CARD */}
          <div className="grid grid-cols-3 items-center  justify-center">
            {userFav.map((value) => (
              <div className="h-20 w-20 bg-primaryBlue">sdfs</div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProfilePage;
