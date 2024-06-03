import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ImageSlider } from "./components/Slider/Slider.jsx";
import { App, Hello } from "./App.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { NavBottombar } from "./components/NavBottombar/NavBottombar.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <ImageSlider />
      <NavBottombar />
      {/* <Hello />
    <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
