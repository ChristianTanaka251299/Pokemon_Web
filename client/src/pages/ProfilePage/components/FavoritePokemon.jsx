import React from 'react'
import axios from "axios"
import { HeartIcon } from "@heroicons/react/24/solid";
import { capitalizeFirstLetter } from "../../../helper/string";

const favoritePokemon = ({ userFav, userId }) => {
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
  return (
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
  )
}

export default favoritePokemon