import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import paramReducer from "./reducers/paramSlice";
import pokemonReducer from "./reducers/pokemonSlice";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  user: userReducer,
  param: paramReducer,
  pokemon: pokemonReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
});

export default store;
