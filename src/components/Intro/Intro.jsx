import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
const Intro = () => {

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span> Hy! I Am</span>
          <span>Shubham Sonawane</span>
          <span>
            Student At Dr. D. Y. Patil Technical Campus, Pune (Computer Engineering 3rd year) | Coder<br />fullstack Developer with low level of experience in web designing
            and development.<br />
          </span>

        </div>

        {/* <button className="button i-button">resume</button> */}
        <div className="i-icons">
          <img src={Github} alt="https://github.com/shubham21221" />
          <img src={LinkedIn} alt="https://www.linkedin.com/in/shubham-sonawane-251b451a4/" />
          <img src={Instagram} alt="https://www.instagram.com/shubham_sonawane_11/" />
        </div>
        <div className="i-skills">
          <span>Skills<br/></span>
          <span>
            Data Science<br/>
            Python (Programming Language)<br/>
            Data Structures<br/>
            Android Development<br/>
            c++(dsa)
            java
            git
          </span>

        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <div className="blur" style={{ background: "rgb(238 210 255)" }}>
        </div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
