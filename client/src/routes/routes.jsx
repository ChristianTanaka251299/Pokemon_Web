import { Route } from "react-router-dom";
import {SplashScreen, Home, SignUp, Login, TestingPage} from "../pages";

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
];

export default routes;
