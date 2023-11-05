import React from 'react';
import Savory from "../../public/bubbles/Savory.png";
import Chips from "../../public/bubbles/Chips.png";
import Candy from "../../public/bubbles/Candy.png";
import Chocolate from "../../public/bubbles/Chocolate.png";
import Drinks from "../../public/bubbles/Drinks.png";
import Crackers from "../../public/bubbles/Crackers.png";



function CategoryBubbles() {
  return (
    <div className="bubble-container">
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
          <img src={Candy} alt="Candy"
            className="w-14" />
        </div>
        <p>
          CANDY
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
          <img src={Chips} alt="Chips" className="w-14" />
        </div>
        <p>
          CHIPS
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
          <img src={Chocolate} alt="Chocolate" className="w-14" />
        </div>
        <p>
          CHOCOLATE
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
          <img src={Crackers} alt="Crackers" className="w-14" />
        </div>
        <p>
          CRACKERS
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
          <img src={Drinks} alt="Drinks" className="w-14" />
        </div>
        <p>
          DRINKS
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
          <img src={Savory} alt="Savory" className="w-14" />
        </div>
        <p>
          SAVORY
        </p>
      </a>
    </div>
  );
}

export default CategoryBubbles;

