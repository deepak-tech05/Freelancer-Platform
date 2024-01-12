import React from "react";
import "./work.css";
import Line from "./images/work/Line 22.png";
import Vector from "./images/work/Vector(13).png";
import Rect from "./images/work/Rectangle 48.png";

export const Workexperience = () => {
  return (
    <div className="main">
      <div className="component">
        <div className="overlap">
          <img className="line" alt="Line" src={Line} />
          <img className="vector" alt="Vector" src={Vector} />
          <div className="text-wrapper">Add Work Experience.</div>

          <button className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Continue</div>
            </div>
          </button>

          <div className="overlap-group-wrapper">
            <input className="rectangle-3" type="text" />
          </div>
          <text className="text-wrapper-3">Description</text>

          <div className="overlap-22">
            <input className="rectangle-44" />
          </div>
          <text className="text-wrapper-4">Title</text>

          <div className="group-3">
            <input className="rectangle-4" type="digit" />
            <text className="text-wrapper-5">Years</text>
          </div>
        </div>
      </div>
    </div>
  );
};
