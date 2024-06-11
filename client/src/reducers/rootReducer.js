import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import paramReducer from "./paramSlice";
import pokemonReducer from "./pokemonSlice";
import modalReducer from "./modalSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  user: userReducer,
  param: paramReducer,
  pokemon: pokemonReducer,
  modal: modalReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    storage.removeItem('persist:root'); // Clear persisted state
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
