import { Route } from "react-router-dom";
import { Header } from "../components"
import Home from "../pages/Home";
import SplashScreen from "../pages/SplashScreen";

const routes = [
  <Route
    path="/"
    element={
      <>
      <Header/>
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
