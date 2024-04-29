import React, { useEffect, useState } from "react";
import { PencilSquareIcon, HeartIcon } from "@heroicons/react/24/solid";
import EmptyUser from "../../assets/user_icon.jpg";
import { useSelector } from "react-redux";
import axios from "axios";
import { capitalizeFirstLetter } from "../../helper/string";

const ProfilePage = () => {
  const userId = useSelector((state) => state.user.id);
  const [userInfo, setUserInfo] = useState([]);
  const [userFav, setUserFav] = useState([]);
  const [pokelist, setPokeList] = useState([]);

  const getUserInfo = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/get/${userId}`,
    );
    setUserInfo(result.data.result);
  };

  const getUserFav = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/favorite/get`,
        {
          params: { user_id: userId },
        },
      );
      const pokemonList = res.data.data;
      setUserFav(res.data.data);
      getPokeInfo(pokemonList);
    } catch (error) {
      console.log("Error fetching user favorites:", error);
    }
  };

  const handleFavToggle = async (pokemonName, image) => {
    try {
      const isPokemonInFav = userFav.some(
        (fav) => fav.pokemon_name === pokemonName,
      );
      const pokemonData = {
        user_id: userId,
        pokemon_name: pokemonName,
        image: image,
      };
      if (isPokemonInFav) {
        try {
          await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/favorite/delete`,
            {
              params: { user_id: userId, pokemon_name: pokemonName },
            },
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await axios.post(
            `${process.env.REACT_APP_BASE_URL}/favorite/add`,
            pokemonData,
          );
        } catch (error) {
          console.log(error);
        }
      }
      getUserFav();
    } catch (error) {
      console.log("Error toggling favorite:", error);
    }
  };
  const getPokeInfo = async (list) => {
    try {
      list.map(async (list) => {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${list.pokemon_name}`,
        );
        const finalResult = result.data;
        setPokeList((prev) => [...prev, finalResult]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getUserFav();
  }, []);
  return (
    <>
      <section className="container-screen lg:w-[78%]">
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
            <button className="my-4 rounded-md lg:rounded-sm bg-yellow-400 px-2 py-1  lg:py-2 font-helvetica text-white transition duration-200 hover:bg-primaryYellow">
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
        <section>
          <div className="lg:mt-4 flex items-center lg:justify-start justify-center lg:border-b-4 lg:border-primaryBlue">
            <h1 className="my-4 font-helvetica text-xl lg:text-2xl text-primaryBlue">
              Favorite Pokémon
            </h1>
          </div>
          {/* POKEMON CARD */}
          <div className="my-4 grid grid-cols-3 items-center justify-items-center gap-4">
            {userFav.map((value, index) => (
              <div
                key={index}
                className="flex h-28 w-28 lg:h-64 lg:w-64 flex-col rounded-md bg-primaryBlue p-3"
              >
                <button className=" items-end">
                  <HeartIcon
                    className={`ml-auto w-4 ${
                      userFav.some(
                        (fav) => fav.pokemon_name === value.pokemon_name,
                      )
                        ? "text-primaryYellow"
                        : "text-white"
                    } hover:text-primaryYellow lg:w-7`}
                    onClick={() =>
                      handleFavToggle(
                        value.name,
                        value?.sprites?.other["official-artwork"].front_default,
                      )
                    }
                  />
                </button>
                <img
                  src={value?.image}
                  className="mx-auto h-14 w-14 lg:h-40 lg:w-40"
                />
                <p className="mt-2 text-center font-helvetica text-[10px] text-white lg:mt-3 lg:text-base">
                  {capitalizeFirstLetter(value?.pokemon_name)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProfilePage;
