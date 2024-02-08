import React, { useState, useEffect } from "react";
import axios from "axios";
import { PCFilter, MobileFilter } from "./components";
import Background from "../../assets/background.jpg";

const Pokemon = () => {
  const sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  };
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const fetchList = async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${offset}`,
      );
      const eachPokemonAPI = result.data.results;
      eachPokemonAPI.map(async (value) => {
        const result = await axios.get(value.url);
        pokemonList.push(result.data);
      });
      console.log("isi dari pokemonList", pokemonList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <section style={sectionStyle}>
      <PCFilter />
      <MobileFilter />
    </section>
  );
};

export default Pokemon;
