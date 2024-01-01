import React from "react";
import { Link } from "react-router-dom";
import SeriesIcon from "../../../assets/x.png";
import PokeBallIcon from "../../../assets/logo/pokeball.png";

const Series = () => {
  return (
    <>
      <section className="container-screen sm:hidden">
        <div className="flex justify-center">
          <Link to="/">
            <div className="mx-8">
              <img src={SeriesIcon} className="h-16" />
              <p className="mt-3 text-center text-white">Series</p>
            </div>
          </Link>
          <Link to="/">
            <div className="mx-8">
              <img src={PokeBallIcon} className="h-16" />
              <p className="mt-3 text-center text-white">Pokémon</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Series;
