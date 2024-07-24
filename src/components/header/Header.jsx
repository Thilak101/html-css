import React from "react";
import "./header.css";
import img from "../../assets/header.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <h1 className="header__title1">Lessons and insights</h1>
        <h1 className="header__title2">from 8 years</h1>
        <small>
          Where to grow your business as a photographer: Site or social media?
        </small>
        <div>
          <button>Register</button>
        </div>
      </div>
      <div className="header__img">
        <img src={img} alt="computer" width={"400px"} />
      </div>
    </div>
  );
};

export default Header;
