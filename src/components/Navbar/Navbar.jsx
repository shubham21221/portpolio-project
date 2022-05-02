import React from "react";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar" >
      {/* left */}
      <div className="n-left">
        <div className="n-name">PROFILE</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Serivces</li>
            <li>About</li>
            <li>contact</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default navbar;
