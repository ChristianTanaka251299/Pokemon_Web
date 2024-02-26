import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import paramReducer from "./reducers/paramSlice";
import pokemonReducer from "./reducers/pokemonSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    param: paramReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
