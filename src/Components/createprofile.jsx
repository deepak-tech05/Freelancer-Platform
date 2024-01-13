import React from "react";
import "./profile.css";
import Dp from "./images/profile/ProfilePhoto.png";
import Downvector from "./images/profile/Vector(16).png";
import Flag from "./images/profile/flag.png";
import Verticalline from "./images/profile/verticalline.png";
import Horizontalline from "./images/profile/Line 20.png";
import Left from "./images/profile/Vector(15).png";

export const Createprofile = () => {
  return (
    <div className="main">
      <div className="create-profile">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper">M</div>
          </div>
        </div>
        <div className="div">Create Profile</div>
        <div className="overlap">
          <img className="img" alt="Create profile" src={Horizontalline} />
        </div>
        <button>
          <img className="img-2" alt="Create profile" src={Left} />
        </button>
        <div className="text-wrapper-2">Add contact information.</div>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
          eiusmod.
        </p>
        <button className="group-wrapper">
          <div className="group">
            <div className="text-wrapper-3">Continue</div>
          </div>
        </button>
        <img className="img-3" alt="Create profile" src={Dp} />
        <a className="create-profile-wrapper">
          <div className="text-wrapper-4">+&nbsp;&nbsp;Upload photo</div>
        </a>
        <div className="div-2">
          <div className="overlap-2">
            <input className="rectangle"></input>
            <div className="div-wrapper">
              <div className="text-wrapper-5">eg,India</div>
            </div>
            <img className="vector" alt="Vector" src={Downvector} />
          </div>
          <div className="text-wrapper-6">Country*</div>
        </div>
        <div className="div-3">
          <div className="overlap-2">
            <input className="rectangle" />
            <div className="group-2">
              <div className="text-wrapper-5">eg- New Delhi</div>
            </div>
            <img className="vector" alt="Vector" src={Downvector} />
          </div>
          <div className="text-wrapper-6">City Name*</div>
        </div>
        <div className="div-4">
          <div className="overlap-2">
            <input className="rectangle" />
            <div className="group-3">
              <div className="text-wrapper-5">Enter code</div>
            </div>
          </div>
          <div className="text-wrapper-7">Zip code/ Pincode</div>
        </div>
        <div className="div-5">
          <div className="overlap-2">
            <input className="rectangle" />
            <div className="text-wrapper-8">Adam</div>
          </div>
          <p className="first-name">
            <span className="span">First</span>
            <span className="text-wrapper-9">&nbsp;</span>
            <span className="text-wrapper-10">Name</span>
          </p>
        </div>
        <div className="div-6">
          <div className="overlap-2">
            <input className="rectangle" />
            <div className="text-wrapper-11">Smith</div>
          </div>
          <div className="text-wrapper-7">Last Name</div>
        </div>
        <div className="div-7">
          <div className="overlap-3">
            <input className="rectangle-2" />
            <div className="text-wrapper-12">Address</div>
          </div>
          <p className="address">
            <span className="text-wrapper-13">Address</span>
            <span className="text-wrapper-14">*</span>
          </p>
        </div>
        <div className="text-wrapper-15">8/8</div>
        <div className="div-8">
          <div className="overlap-2">
            <img className="vector-2" alt="Vector" src={Downvector} />
            <input className="rectangle" />
            <div className="text-wrapper-16">989876363474</div>
            <div className="text-wrapper-17">+61</div>
            <img className="rectangle-3" alt="Rectangle" src={Flag} />
            <img className="line" alt="Line" src={Verticalline} />
          </div>
          <div className="text-wrapper-18">Phone number</div>
        </div>
      </div>
    </div>
  );
};
