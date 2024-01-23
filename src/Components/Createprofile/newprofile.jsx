import React from "react";
import "./newprofile.css";
import Line from "./image/line.png";
import Pic from "./image/pic.png";

export function Newprofile() {
  return (
    <div className="main">
      <div className="main-component">
        <div className="component">
          <div className="crt-prf">
            <text className="txt">Create Profile</text>
          </div>
          <img src={Line} alt="line" className="line" />

          <div className="cnt-inf">
            <text className="txt-1">Add Contact Information</text>
            <p className="txt-2">
              add correct Informationas per the documentaion
            </p>
          </div>

          <div className="prf-pic">
            <img src={Pic} className="pic" />
            <a src="#" className="upload-photo">
              +Uplaod Photo
            </a>
          </div>
          <form action="#">
            <div className="container">
              <div className="namme">
                <div class="frm-grp">
                  <div class="frm-lbl-1">
                    <label className="title">First Name</label>
                  </div>
                  <input type="text" id="title" class="frm-input" required />
                </div>
                <div class="frm-grp">
                  <div class="frm-lbl-2">
                    <label className="title">
                      Last Name
                    </label>
                  </div>
                  <input type="number" id="years" class="frm-input" required />
                </div>
              </div>

              <div className="add">
                <div class="frm-grp">
                  <div class="frm-lbl-add">
                    <label className="title">Address</label>
                  </div>
                  <input
                    type="text"
                    id="title"
                    class="frm-input-add"
                    required
                  />
                </div>
              </div>

              <div className="namme">
                <div class="frm-grp">
                  <div class="frm-lbl-1">
                    <label className="title">City Name*</label>
                  </div>
                  <input type="text" id="title" class="frm-input" required />
                </div>
                <div class="frm-grp">
                  <div class="frm-lbl-2">
                    <label className="title" for="years">
                      Country*
                    </label>
                  </div>
                  <input type="number" id="years" class="frm-input" required />
                </div>
              </div>
              <div className="namme">
                <div class="frm-grp">
                  <div class="frm-lbl-1">
                    <label className="title">Zip code/Pincode</label>
                  </div>
                  <input type="text" id="title" class="frm-input" required />
                </div>
                <div class="frm-grp">
                  <div class="frm-lbl-2">
                    <label className="title" for="years">
                      Phone number
                    </label>
                  </div>
                  <input type="number" id="years" class="frm-input" required />
                </div>
              </div>
              <button className="button">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
