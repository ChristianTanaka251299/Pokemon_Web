import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import paramReducer from "./reducers/paramSlice";
import pokemonReducer from "./reducers/pokemonSlice";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    user: userReducer,
    param: paramReducer,
    pokemon: pokemonReducer,
  }
});

export default store;
