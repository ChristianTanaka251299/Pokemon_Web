import "./index.css"
import { Routes } from "react-router-dom"
import routes from "./routes/routes"

function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Routes>{routes}</Routes>
    </div>
  );
}

export default App;
