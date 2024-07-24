import React from "react";
import "./navbar.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__brand"><h3>Nexcent</h3></div>
      <div className="navbar__nav">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Commmunity</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
        <button>
          <small className="navbar__register">Register Now</small>
          <span className="navbar__icon">
            <IoIosArrowRoundForward />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
