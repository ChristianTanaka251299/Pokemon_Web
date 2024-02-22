import "./index.css";
import { Routes } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import { Header, Footer } from "./components";
import SplashScreen from "./pages/SplashScreen";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="flex min-h-full flex-col">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <div className="flex h-screen flex-col">
            <Header />
            <Routes>{routes}</Routes>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
