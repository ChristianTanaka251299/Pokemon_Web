import { Route } from "react-router-dom";

import Home from "../pages/Home";
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
];

export default routes;
