import "./index.css";
import { Routes} from "react-router-dom";
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="min-h-full flex flex-col">
      {loading ? <SplashScreen /> : <Routes>{routes}</Routes>}
    </div>
  );
}

export default App;
