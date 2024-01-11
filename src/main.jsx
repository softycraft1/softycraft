import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import WhatWeDo from "./Pages/WhatWeDo/WhatWeDo.jsx";
import About from "./Pages/About/About.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="whatwedo" element={<WhatWeDo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     {/* <App /> */}
  <RouterProvider router={router} />
  </React.StrictMode>
  
);
