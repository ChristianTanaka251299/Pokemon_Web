import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp"
import SplashScreen from "../pages/SplashScreen";

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
];

export default routes;
