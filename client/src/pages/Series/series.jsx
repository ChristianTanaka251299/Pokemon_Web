import React, { useState } from "react";
import Background from "../../assets/background.jpg";
import XSelected from "../../assets/x_selected.png";
import XUnselected from "../../assets/x.png";
import OmegaSelected from "../../assets/omega_selected.png";
import OmegaUnselected from "../../assets/omega_unselected.png";
import ShieldSelected from "../../assets/shield_selected.png";
import ShieldUnselected from "../../assets/shield_unselected.png";
import Wallpaper from "../../assets/series_wallpaper.jpg";
import { useNavigate } from "react-router-dom";

import Groudon from "../../assets/mega_groudon.png";
import AlphaSaphire from "../../assets/logo/alpha_saphire.png";
import OmegaRuby from "../../assets/logo/omega_ruby.png";

import Xerneas from "../../assets/xerneas.png";
import PokemonX from "../../assets/logo/pokemon_x.png";
import PokemonY from "../../assets/logo/pokemon_y.png";

import Zamazenta from "../../assets/zamazenta.png";
import Sword from "../../assets/logo/pokemon_sword.png";
import Shield from "../../assets/logo/pokemon_shield.png";

const Series = () => {
  const sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  };
  const data = [
    {
      id: 1,
      image: Groudon,
      name: "Mega Groudon",
      subtext:
        "Groudon is said to be the personification of the land itself. Legends tell of its many clashes against Kyogre, as each sought togain the power of nature.",
      series1: OmegaRuby,
      series2: AlphaSaphire,
    },
    {
      id: 2,
      image: Xerneas,
      name: "Xerneas",
      subtext:
        "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
      series1: PokemonX,
      series2: PokemonY,
    },
    {
      id: 3,
      image: Zamazenta,
      name: "Zamazenta",
      subtext:
        "Its ability to deflect any attack led to it being known as the Fighting Master’s Shield. It was feared and respected by all.",
      series1: Sword,
      series2: Shield,
    },
  ];
  const [selected, setSelected] = useState(0);
  const [list, setList] = useState(data[0]);
  const navigate = useNavigate();

  const onChange = (value) => {
    setSelected(value);
    setList(data[value]);
  };

  return (
    <section style={sectionStyle}>
      <section className="lg:container-screen flex flex-col lg:flex-row lg:items-center">
        {/* ICON SECTION */}
        <div className="flex justify-around lg:h-[500px] lg:flex-col">
          <button onClick={() => onChange(0)}>
            {selected === 0 ? (
              <img src={OmegaSelected} className="w-10" />
            ) : (
              <img src={OmegaUnselected} className="w-10" />
            )}
          </button>
          <button onClick={() => onChange(1)}>
            {selected === 1 ? (
              <img src={XSelected} className="w-10" />
            ) : (
              <img src={XUnselected} className="w-10" />
            )}
          </button>
          <button onClick={() => onChange(2)}>
            {selected === 2 ? (
              <img src={ShieldSelected} className="w-10" />
            ) : (
              <img src={ShieldUnselected} className="w-10" />
            )}
          </button>
        </div>
        {/* TEXT SECTION */}
        <div className="ml-auto mt-3 flex flex-col items-start justify-center lg:flex-row lg:items-center ">
          <div className="flex items-center justify-center lg:hidden">
            <img src={Wallpaper} className="relative w-auto" />
            <img src={list.image} className="absolute mx-auto w-7/12" />
          </div>
          <div className="container-screen mt-3 lg:mr-20 lg:w-[400px]">
            <h1 className="border-b-4 border-primaryBlue text-center font-helvetica text-2xl text-primaryBlue lg:border-b-0 lg:border-l-4 lg:pl-2 lg:text-left lg:text-3xl">
              {list.name}
            </h1>
            <p className="my-4 text-primaryYellow">{list.subtext}</p>
          </div>
          <div className="hidden h-[500px] lg:block">
            <img src={list.image} className="h-full" />
          </div>
          <div className="container-screen mt-3 lg:hidden">
            <h1 className="border-b-4 border-primaryBlue text-center font-helvetica text-2xl text-primaryBlue">
              Series
            </h1>
            <div className="flex flex-col items-center py-2">
              <img src={list.series1} className="my-2 w-1/2" />
              <img src={list.series2} className="my-2 w-1/2" />
            </div>
          </div>
        </div>
      </section>
      <div className="container-screen my-1 flex justify-center">
        <button
          onClick={() => navigate("/pokemon")}
          className="text-slate-400  transition duration-150 hover:text-slate-700 lg:ml-auto"
        >
          See More Pokemon
        </button>
      </div>
      {/* PC SERIES SECTION */}
      <section className="hidden bg-primaryBlue py-4 lg:block">
        <div className="container-screen flex items-center justify-around">
          <h1 className="font-helvetica text-3xl text-white">Series :</h1>
          <img src={list.series1} className="w-1/12" />
          <img src={list.series2} className="w-1/12" />
        </div>
      </section>
    </section>
  );
};

export default Series;
