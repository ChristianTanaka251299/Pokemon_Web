import { Route } from "react-router-dom";
import { SplashScreen, Home, SignUp, Login, TestingPage, SeriesPage, PokemonPage } from "../pages";

const routes = [
  <Route
    path="/"
    element={
      <>
        <Home />
      </>
    }
  />,
  <Route
    path="/splash"
    element={
      <>
        <SplashScreen />
      </>
    }
  />,
  <Route
    path="/login"
    element={
      <>
        <Login />
      </>
    }
  />,
  <Route
    path="/sign-up"
    element={
      <>
        <SignUp />
      </>
    }
  />,
  <Route
    path="/test"
    element={
      <>
        <TestingPage />
      </>
    }
  />,
  <Route
    path="/series"
    element={
      <>
        <SeriesPage />
      </>
    }
  />,
  <Route
    path="/pokemon"
    element={
      <>
        <PokemonPage />
      </>
    }
  />,
];

export default routes;
