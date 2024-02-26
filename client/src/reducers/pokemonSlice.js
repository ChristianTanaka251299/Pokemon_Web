import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  subtext: "",
  image:"",
  type: [],
  hp: 0,
  attack: 0,
  defense: 0,
  spatt: 0,
  spdef: 0,
  speed: 0,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.name = action.payload.name;
      state.subtext = action.payload.species.url;
      state.image = action.payload.sprites?.other["official-artwork"].front_default;
      state.type = action.payload.types;
      state.hp = action.payload.stats[0].base_stat;
      state.attack = action.payload.stats[1].base_stat;
      state.defense = action.payload.stats[2].base_stat;
      state.spatt = action.payload.stats[3].base_stat;
      state.spdef = action.payload.stats[4].base_stat;
      state.speed = action.payload.stats[5].base_stat;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
