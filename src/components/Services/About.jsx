import React, { useContext } from "react";
import "./About.css";
// import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Services = () => {
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span >My Awesome</span>
        <span>About</span>
        <span>
          About
          Engineering Student seeking to build upon knowledge developed during studies as a Software Engineer.
          Prepared to apply information gained during Computer Science degree <br/>

          My Technical Proficiencies Include :

          Languages : C, C++, Java, R and Python.<br/>
          Problem Solving Skills : Data Structures and Algorithms, Statistical Techniques, Critical Thinking.<br/>
          Database and IDE : Visual Studio, MySQL, Python, Eclipse, Android Studio<br/>
          Environments : Linux, and Windows<br/>
          Fields of Interests : Machine Learning, Android App Development, Web Development, Data Science, Ethical Hacking.<br/>       
          </span>
          <div className="cards">
        <div className="blur s-blur2"
          style={{ background: "var(--purple)" }}>
        </div>
        </div>
        <a href={Resume} download>
        <div className="blur s-blur2"
          style={{ background: "var(--purple)" }}>
        </div>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
         <div className="blur s-blur2"
          style={{ background: "var(--purple)" }}>
        </div>
      </div>
      
      <div className="cards">
        {/* <div className="blur s-blur2"
          style={{ background: "var(--purple)" }}>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
