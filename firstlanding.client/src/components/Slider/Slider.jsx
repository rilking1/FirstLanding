import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Slider.scss";

export function ImageSlider() {
  return (
    <div>
      <div className="slider">
        <div className="TasksWrapper">
          <div className="SelectedTasksText">TEXT</div>
          <div className="SelectedTasksImg"></div>
          <a href="">
            <div className="TasksImg"></div>
          </a>
        </div>

        <div className="TasksWrapper">
          <div className="SelectedTasksText">TEXT</div>
          <div className="SelectedTasksImg"></div>
          <a href="">
            <div className="TasksImg"></div>
          </a>
        </div>
      </div>

    </div>
  );
}
