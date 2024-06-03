// routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ImageSlider } from './components/Slider/Slider.jsx';
import { App, Hello } from './App.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { NavBottombar } from './components/NavBottombar/NavBottombar.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ImageSlider />} />
      <Route path="/hello" element={<Hello />} />
      <Route path="/app" element={<App />} />
    </Routes>
  );
};

export default AppRoutes;
