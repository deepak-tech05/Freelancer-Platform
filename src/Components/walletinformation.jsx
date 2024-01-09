import React from "react";
import "./wallet.css";
import Line from "./images/wallet/Line 29.png";
import Dp from "./images/wallet/Rectangle 71.png";
import Dottedline from "./images/wallet/Line 28.png";
import Akar from "./images/wallet/akar-icons_check-box.png";
import Bi from "./images/wallet/bi_caret-down-fill.png";
import Vector from "./images/wallet/Vector(10).png";

export const Walletinformation = () => {
  return (
    <div className="main">
      <div className="component">
        <div className="overlap">
          <img
            className="img"
            alt="Icomoon free radio"
            src="icomoon-free-radio-checked.svg"
          />
          <img
            className="ic-twotone-radio"
            alt="Ic twotone radio"
            src="ic-twotone-radio-button-unchecked.svg"
          />
          <img
            className="img"
            alt="Bi caret down fill"
            src="bi-caret-down-fill.svg"
          />
          <div className="rectangle" />
          <div className="div" />
          <div className="div" />
          <input type="text" className="text-wrapper" />
          {/* <input className="text-wrapper" defaultValue="Enter Wallet"/> */}
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">M</div>
            </div>
          </div>
          <div className="complete-your">Complete your&nbsp;&nbsp;profile</div>
          <img className="line" alt="Line" src={Dottedline} />
          <img className="line-2" alt="Line" src={Line} />
          <img className="vector" alt="Vector" src={Vector} />
          <div className="text-wrapper-3">Add Wallet information.</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod.
          </p>
          <div className="text-wrapper-4">8/8</div>
          <div className="text-wrapper-5">Wallet Address</div>
          <img className="mask-group" alt="Mask group" src={Dp} />
          <div className="welcome-XYZ">Welcome&nbsp;&nbsp;XYZ</div>
          <img
            className="akar-icons-check-box"
            alt="Akar icons check box"
            src={Akar}
          />
          <img
            className="bi-caret-down-fill"
            alt="Bi caret down fill"
            src={Bi}
          />
          <button className="group-wrapper">Create My Account</button>
        </div>
      </div>
    </div>
  );
};
