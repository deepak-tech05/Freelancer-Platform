import React from "react";
import Line from "./images/profile/Line 20.png"
import Linev from "./images/profile/Line 29(4).png"
import Invertedtriangle from "./images/profile/Vector(11).png"
import Dp from "./images/profile/ProfilePhoto.png"
import Flag from "./images/profile/Rectangle 84.png"
import Left from "./images/profile/Vector(12).png"



import "./profile.css";

export const Createprofile= () => {
    return (
        <div className="component">
            <div className="group">
                <div className="overlap-group">
                    <div className="text-wrapper">M</div>
                </div>
            </div>
            <div className="div">Create profile</div>
            <div className="overlap">
                <img className="line" alt="Line" src={Line} />
            </div>
            <img className="vector" alt="Vector" src={Left} />
            <div className="text-wrapper-2">Add contact information.</div>
            <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>
            <div className="group-wrapper">
                <div className="div-wrapper">
                    <div className="text-wrapper-3">Continue</div>
                </div>
            </div>
            <img className="mask-group" alt="Mask group" src={Dp} />
            <div className="upload-photo-wrapper">
                <a className="upload-photo">+&nbsp;&nbsp;Upload photo</a>
            </div>
            <div className="group-2">
                <div className="overlap-2">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="group-3">
                        <div className="text-wrapper-4">eg,India</div>
                    </div>
                    <img className="img" alt="Vector" src={Invertedtriangle} />
                </div>
                <div className="text-wrapper-5">Country*</div>
            </div>
            <div className="group-4">
                <div className="overlap-2">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <input className="rectangle" />
                    <div className="group-5">
                        <div className="text-wrapper-4">eg- New Delhi</div>
                    </div>
                    <img className="img" alt="Vector" src={Invertedtriangle} />
                </div>
                <div className="text-wrapper-5">City Name*</div>
            </div>
            <div className="group-6">
                <div className="overlap-2">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="group-7">
                        <div className="text-wrapper-4">Enter code</div>
                    </div>
                </div>
                <div className="text-wrapper-6">Zip code/ Pincode</div>
            </div>
            <div className="group-8">
                <div className="overlap-2">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <input className="rectangle" />
                    <text className="text-wrapper-7">Adam</text>
                </div>
                <p className="first-name">
                    <span className="span">First</span>
                    <span className="text-wrapper-8">&nbsp;</span>
                    <span className="text-wrapper-9">Name</span>
                </p>
            </div>
            <div className="group-9">
                <div className="overlap-2">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <input className="rectangle" />
                    <text className="text-wrapper-10">Smith</text>
                </div>
                <div className="text-wrapper-6">Last Name</div>
            </div>
            <div className="group-10">
                <div className="overlap-3">
                    <div className="rectangle-2" />
                    <div className="rectangle-2" />
                    <input className="rectangle-2" />
                    <text className="text-wrapper-11">Address</text>
                </div>
                <p className="address">
                    <span className="text-wrapper-12">Address</span>
                    <span className="text-wrapper-13">*</span>
                </p>
            </div>
            <div className="text-wrapper-14">8/8</div>
            <div className="group-11">
                <div className="overlap-2">
                    <img className="vector-2" alt="Vector" src="vector-3.svg" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="text-wrapper-15">989876363474</div>
                    <div className="text-wrapper-16">+61</div>
                    <img className="rectangle-3" alt="Rectangle" src={Flag} />
                    <img className="line-2" alt="Line" src={Linev}/>
                </div>
                <div className="text-wrapper-17">Phone number</div>
            </div>
        </div>
    );
};
