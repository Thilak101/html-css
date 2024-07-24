import React from "react";
import "./cards.css";


const Cards = ({ svg, heading, content }) => {
  return (
    <div className="cards">
      <div>
        {svg}
        <h1>{heading}</h1>
        <small>{content}</small>
      </div>
    </div>
  );
};

export default Cards;
