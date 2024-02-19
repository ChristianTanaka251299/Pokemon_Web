import React, { useState, useEffect } from "react";
import { PokeCard } from "./";
import axios from "axios";
const TopPicks = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState([]);

  const getFavList = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/favorite/get-top`,
    );
    const value = res.data.result[0];
    setCount(res.data.result[0]);
    console.log("ini cek count", res.data.result[0]);
    getPokemonList(value);
  };

  const getPokemonList = async (list) => {
    const updatedList = await Promise.all(
      list.map(async (item) => {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${item.pokemon_name}`,
        );
        let newList = res.data;
        newList.count = item.count;
        return newList;
      }),
    );

    setList((prev) => [...prev, ...updatedList]);
  };

  useEffect(() => {
    getFavList();
  }, []);

  return (
    <>
      <section className="container-screen font-helvetica">
        <h2 className="mt-8 border-t-4 border-t-white pt-4 text-center text-xl tracking-widest text-white lg:border-b-4 lg:border-t-0 lg:py-3 lg:text-left">
          TOP PICKS
        </h2>
        <div className="my-4 grid grid-cols-2 justify-between gap-2 md:flex">
          <PokeCard list={list} count={count} />
        </div>
      </section>
    </>
  );
};

export default TopPicks;
