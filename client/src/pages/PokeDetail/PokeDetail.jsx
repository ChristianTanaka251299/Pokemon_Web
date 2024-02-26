import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Foreground from "../../assets/logo/pokeball_rotate.png";
import { capitalizeFirstLetter } from "../../helper/string";
import Color from "./typecolor";
import axios from "axios";

const PokeDetail = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");
  const [language, setLanguage] = useState("en");
  const [subtexts, setSubtexts] = useState("");
  const [subTextKo, setSubTextKo] = useState("");
  const navigate = useNavigate();

  const hpWidth = `${pokemon.hp / 2}px`;

  const setPokemonType = () => {
    const result = Color.find(
      (value) => value.name === pokemon?.type[0]?.type?.name,
    );
    const result2 = Color.find(
      (value) => value.name === pokemon?.type[1]?.type?.name,
    );
    setColorOne(result?.color);
    setColorTwo(result2?.color);
  };

  const getSubtext = async () => {
    const result = await axios.get(`${pokemon.subtext}`);
    const arrayOfSubtext = result.data.flavor_text_entries;
    const enSubtext = arrayOfSubtext.find(
      (value) => value?.language?.name === "en",
    );
    const koSubtext = arrayOfSubtext.find(
      (value) => value?.language?.name === "ko",
    );
    setSubtexts(enSubtext.flavor_text);
    setSubTextKo(koSubtext.flavor_text);
  };

  useEffect(() => {
    setPokemonType();
    getSubtext();
  }, []);
  return (
    <section>
      {/* Image Section */}
      <div className="flex h-[200px] items-center justify-center overflow-hidden">
        <img src={Foreground} className="relative h-[300px]" />
        <img src={pokemon.image} className="absolute h-[170px]" />
      </div>
      {/* Name  */}
      <div className="container-screen my-4 flex">
        <div>
          <h1 className="border-l-4 border-primaryYellow pl-3 font-helvetica text-xl text-primaryBlue">
            {capitalizeFirstLetter(pokemon.name)}
          </h1>
        </div>
        <div className="ml-auto grid grid-cols-2 items-center gap-4 text-center">
          <div
            className={`rounded-sm bg-[${colorOne}] px-4 py-0.5 text-xs font-medium text-white`}
          >
            {capitalizeFirstLetter(pokemon.type[0].type.name)}
          </div>
          {pokemon?.type[1]?.type?.name && (
            <div
              className={`rounded-sm bg-[${colorTwo}] px-4 py-0.5  text-xs font-medium text-white`}
            >
              {capitalizeFirstLetter(pokemon.type[1].type.name)}
            </div>
          )}
        </div>
      </div>
      {/* subtext */}
      <div className="container-screen">
        <h2 className="text-justify font-montserrat text-sm text-primaryYellow">
          {language === "en" ? subtexts : subTextKo}
        </h2>
      </div>
      {/* Toggle Language Switch */}
      <div className="container-screen flex items-center justify-end font-montserrat">
        <button
          onClick={() => setLanguage("en")}
          className={`${
            language === "en"
              ? "font-semibold text-primaryBlue"
              : "text-slate-200 transition duration-150 hover:text-primaryBlue/70"
          }`}
        >
          EN
        </button>
        <p className="mx-2"> / </p>
        <button
          onClick={() => setLanguage("ko")}
          className={`${
            language === "ko"
              ? "font-semibold text-primaryBlue"
              : "text-slate-200 transition duration-150 hover:text-primaryBlue/70"
          }`}
        >
          KO
        </button>
      </div>
      {/* Stats */}
      <div className="container-screen">
        {/* HP */}
        <div className="mb-3 mt-7 grid grid-cols-3">
          <h1 className="font-montserrat text-sm font-semibold">HP:</h1>
          <div className="relative col-span-2 bg-slate-200">
            {hpWidth && (
              <div
                className={`absolute h-full  bg-primaryYellow`}
                style={{ width: `${(pokemon.hp / 150) * 100}%` }}
              ></div>
            )}
          </div>
        </div>
        {/* ATTACK */}
        <div className="my-3 grid grid-cols-3">
          <h1 className="font-montserrat text-sm font-semibold">Attack:</h1>
          <div className="relative col-span-2 bg-slate-200">
            {hpWidth && (
              <div
                className={`absolute h-full  bg-primaryYellow`}
                style={{ width: `${(pokemon.attack / 150) * 100}%` }}
              ></div>
            )}
          </div>
        </div>
        {/* Deffense */}
        <div className="my-3 grid grid-cols-3">
          <h1 className="font-montserrat text-sm font-semibold">Defense:</h1>
          <div className="relative col-span-2 bg-slate-200">
            {hpWidth && (
              <div
                className={`absolute h-full bg-primaryYellow`}
                style={{ width: `${(pokemon.defense / 150) * 100}%` }}
              ></div>
            )}
          </div>
        </div>
        {/* SP.Attack */}
        <div className="my-3 grid grid-cols-3">
          <h1 className="font-montserrat text-sm font-semibold">Sp.Attack:</h1>
          <div className="relative col-span-2 bg-slate-200">
            {hpWidth && (
              <div
                className={`absolute h-full bg-primaryYellow`}
                style={{ width: `${(pokemon.spatt / 150) * 100}%` }}
              ></div>
            )}
          </div>
        </div>
        {/* SP.Defense */}
        <div className="my-3 grid grid-cols-3">
          <h1 className="font-montserrat text-sm font-semibold">Sp.Defense:</h1>
          <div className="relative col-span-2 bg-slate-200">
            {hpWidth && (
              <div
                className={`absolute h-full bg-primaryYellow`}
                style={{ width: `${(pokemon.spdef / 150) * 100}%` }}
              ></div>
            )}
          </div>
        </div>
        {/* Speed */}
        <div className=" my-3 grid grid-cols-3">
          <h1 className="font-montserrat text-sm font-semibold">Speed:</h1>
          <div className="relative col-span-2 bg-slate-200">
            {hpWidth && (
              <div
                className={`absolute h-full bg-primaryYellow`}
                style={{ width: `${(pokemon.speed / 150) * 100}%` }}
              ></div>
            )}
          </div>
        </div>
      </div>
      {/* Back */}
      <div className="container-screen flex justify-end font-helvetica">
        <button onClick={() => navigate("/pokemon")}>Back</button>
      </div>
    </section>
  );
};

export default PokeDetail;
