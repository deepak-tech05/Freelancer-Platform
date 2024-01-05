import React from "react";
import container from "./container";
import "./userprofile.css";

export default function Userprofile() {
  return (
    <div className="universe">
      <div>
        <header className="rating">
          <ul>
            <li>
              <div className="prf-picture"></div>
              <text className="prf-name">Albert Rio</text>
              <br></br>
              <pre className="rating">
                <i className="fa-solid fa-star" />
                5.0(3.3k) Level2<br></br>
                We Believe in Quality ! You Dream , We Design
              </pre>
            </li>
            <li className="rating">
              <div>
                <h5>Skills:</h5>
                <ul className="row-list">
                  <li>Frontend Developer</li>
                  <li>Problem Solving</li>
                  <li>Web Design</li>
                </ul>
              </div>
            </li>
            <li className="rating">
              <div>
                <h5>Education:</h5>
                <p>PG in Designging, B.Tech CSE</p>
              </div>
            </li>
            <li className="rating">
              <div>
                <h5>About Me:</h5>
                <p>
                  We are group of WEB developer and designer who are all ready
                  to Amaze you with our professional skills our flair for
                  creative developing and designing on any type of web means
                  that we can help you reach your target audience effectively.
                  Drop me a message today and let's make your viewers that
                  killer first impression! .Our goal is to deliver work with
                  honesty, safety and timely manner.
                </p>
              </div>
            </li>
          </ul>
        </header>
      </div>
      <div className="divider"></div>

      <div className="content">
        <div>
          <h2 className="prj">Projects</h2>
        </div>
        <div className="prj-mar">
          <div className="prj-list">
            <ul>
              <li>
                <div className="prj-1"></div>
              </li>
              <li>
                <div className="prj-2"></div>
              </li>
              <li>
                <div className="prj-3"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
