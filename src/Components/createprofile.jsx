import React from "react";
import Line from "./images/profile/Line 20.png";
import Linev from "./images/profile/Line 29(4).png";
import Invertedtriangle from "./images/profile/Vector(11).png";
import Dp from "./images/profile/ProfilePhoto.png";
import Flag from "./images/profile/Rectangle 84.png";
import Left from "./images/profile/Vector(12).png";

import "./profile.css";

export const Createprofile = () => {
  return (
    <div className="component">
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">M</div>
        </div>
      </div>
      <h1 className="div">Create profile</h1>
      <div className="overlap">
        <img className="line" alt="Line" src={Line} />
      </div>
      {/* <img className="vector" alt="Vector" src="vector.png" /> */}
      <div className="text-wrapper-2">Add contact information.</div>
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.
      </p>
      <button className="group-wrapper">
        <div className="div-wrapper">
          <div className="text-wrapper-3">Continue</div>
        </div>
      </button>

      <img className="mask-group" alt="Mask group" src={Dp} />
      <div className="upload-photo-wrapper">
        <div className="upload-photo">+&nbsp;&nbsp;Upload photo</div>
      </div>
      <div className="group-2">
        <div className="overlap-2">
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <div className="group-3">
            <div className="text-wrapper-4">eg,India</div>
          </div>
          <img className="img" alt="Vector" src={Invertedtriangle} />
        </div>
        <div className="text-wrapper-5">Country*</div>
      </div>
      <div className="group-4">
        <div className="overlap-2">
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <div className="group-5">
            <text className="text-wrapper-4">eg- New Delhi</text>
          </div>
        </div>
        <div className="text-wrapper-5">City Name*</div>
      </div>
      <div className="group-6">
        <div className="overlap-2">
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <div className="group-7">
            <div className="text-wrapper-4">Enter code</div>
          </div>
        </div>
        <div className="text-wrapper-6">Zip code/ Pincode</div>
      </div>
      <div className="group-8">
        <div className="overlap-2">
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <div className="text-wrapper-7">Adam</div>
        </div>
        <p className="first-name">
          <span className="span">First</span>
          <span className="text-wrapper-8">&nbsp;</span>
          <span className="text-wrapper-9">Name</span>
        </p>
      </div>
      <div className="group-9">
        <div className="overlap-2">
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <input className="rectangle" type="text" />
          <div className="text-wrapper-10">Smith</div>
        </div>
        <div className="text-wrapper-6">Last Name</div>
      </div>
      <div className="group-10">
        <div className="overlap-3">
          <input className="rectangle-2" />
          <input className="rectangle-2" />
          <input className="rectangle-2" />
          <div className="text-wrapper-11">Address</div>
        </div>
        <p className="address">
          <span className="text-wrapper-12">Address</span>
          <span className="text-wrapper-13">*</span>
        </p>
      </div>
      <div className="text-wrapper-14">8/8</div>
      <div className="group-11">
        <div className="overlap-2">
          <img className="vector-2" alt="Vector" src={Invertedtriangle} />
          <input className="rectangle" type="digit" />
          <input className="rectangle" type="digit" />
          <input className="rectangle" type="digit" />
          <div className="text-wrapper-15">989876363474</div>
          <div className="text-wrapper-16">+61</div>
          <img className="rectangle-3" alt="Rectangle" src={Flag} />
          <img className="line-2" alt="Line" src={Linev} />
        </div>
        <text className="text-wrapper-17">Phone number</text>
      </div>
    </div>
  );
};
