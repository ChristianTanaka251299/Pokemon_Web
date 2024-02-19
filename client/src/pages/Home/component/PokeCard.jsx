import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { capitalizeFirstLetter } from "../../../helper/string";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ list }) => {
  const navigate = useNavigate();
  return (
    <>
      {list.map((value) => (
        <section>
          <div
            key={value.id}
            className="flex h-40 flex-col rounded-md bg-white p-3 text-slate-800 md:h-52 md:w-52"
          >
            <button onClick={() => navigate("/pokemon")}>
              <img
                src={value?.sprites?.other["official-artwork"].front_default}
                className="mx-auto h-24 w-24 lg:h-40 lg:w-40"
              />
            </button>
            <p className="mt-2 text-center font-helvetica text-xs lg:mt-3 lg:text-base">
              {capitalizeFirstLetter(value?.name)}
            </p>
          </div>

          <div className="mt-2 flex items-center justify-center text-white">
            <HeartIcon className="mr-3 h-5 w-5 text-white" />
            <p>{value?.count}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default PokeCard;
