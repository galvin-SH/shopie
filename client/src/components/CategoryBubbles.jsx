import React from 'react';
import Savory from "../assets/images/bubbles/Savory.png";
import Chips from "../assets/images/bubbles/Chips.png";
import Candy from "../assets/images/bubbles/Candy.png";
import Chocolate from "../assets/images/bubbles/Chocolate.png";
import Drinks from "../assets/images/bubbles/Drinks.png";
import Crackers from "../assets/images/bubbles/Cracker.png";

import "../index.css";


function CategoryBubbles() {
  return (
    <div className="bubble-container">
      <a href="#" target="_blank">
        <div className="bubble">
          <img src={Candy} alt="Candy" className="w-12" />
        </div>
      </a>
      <a href="#" target="_blank">
        <div className="bubble">
          <img src={Chips} alt="Chips" className="w-12" />
        </div>
      </a>
      <a href="#" target="_blank">
        <div className="bubble">
          <img src={Chocolate} alt="Chocolate" className="w-12" />
        </div>
      </a>
      <a href="#" target="_blank">
        <div className="bubble">
          <img src={Crackers} alt="Crackers" className="w-12" />
        </div>
      </a>
      <a href="#" target="_blank">
        <div className="bubble">
          <img src={Drinks} alt="Drinks" className="w-12" />
        </div>
      </a>
      <a href="#" target="_blank">
        <div className="bubble">
          <img src={Savory} alt="Savory" className="w-12" />
        </div>
      </a>
    </div>
  );
}

export default CategoryBubbles;

