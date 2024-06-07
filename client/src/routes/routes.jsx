import { Route } from "react-router-dom";
import {
  SplashScreen,
  Home,
  SignUp,
  Login,
  TestingPage,
  SeriesPage,
  PokemonPage,
  PokeDetailPage,
} from "../pages";

import { ProfilePage, EditProfilePage } from "../pages/ProfilePage"

const routes = [
  <Route
    key="home"
    path="/"
    element={
      <>
        <Home />
      </>
    }
  />,
  <Route
    key="splash"
    path="/splash"
    element={
      <>
        <SplashScreen />
      </>
    }
  />,
  <Route
    key="login"
    path="/login"
    element={
      <>
        <Login />
      </>
    }
  />,
  <Route
    key="sign_up"
    path="/sign-up"
    element={
      <>
        <SignUp />
      </>
    }
  />,
  <Route
    key="test"
    path="/test"
    element={
      <>
        <TestingPage />
      </>
    }
  />,
  <Route
    key="series"
    path="/series"
    element={
      <>
        <SeriesPage />
      </>
    }
  />,
  <Route
    key="pokemon"
    path="/pokemon"
    element={
      <>
        <PokemonPage />
      </>
    }
  />,
  <Route
    key="pokemon_detail"
    path="/pokemon-detail"
    element={
      <>
        <PokeDetailPage />
      </>
    }
  />,
  <Route
    key="profile"
    path="/profile"
    element={
      <>
        <ProfilePage />
      </>
    }
  />,
  <Route
    key="profile"
    path="/profile/edit"
    element={
      <>
        <EditProfilePage />
      </>
    }
  />,
];

export default routes;
