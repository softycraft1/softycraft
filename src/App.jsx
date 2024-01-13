import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
