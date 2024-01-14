import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
