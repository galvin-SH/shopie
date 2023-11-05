  import React from 'react';
  import { useState, useEffect } from 'react';



  function CategoryFilter() {
    
    const [checkboxes, setCheckboxes] = useState({
      Candy: false,
      Chips: false,
      Chocolate: false,
      Crackers: false,
      Drinks: false,
      Savory: false,
    });

    const clickCheckbox = (category) => {
      setCheckboxes({
        ...checkboxes,
        [category]: !checkboxes[category],
      });
    };

    // useEffect(() => {
    
    //   // bring in data here

    //   const filteredData = data.filter((item) => checkboxes[item.category]);

    //   console.log(filteredData);
    // }, [checkboxes]);
  
  const style = {
    borderStyle: "solid",
    borderWidth: "5px",
    width: "400px",
    height: "fit-content",
  };

    return (
      <div className="bg-white p-8" style={style}>
      <div className="flex flex-col">
        <h1 className="titleSpace font-bold mt-1 ">
          CATEGORIES
        </h1>
        <label className="mt-2">
          Candy
          <input 
            type="checkbox"
            className="checkboxItem"
            checked={checkboxes.Candy}
            onChange={() => clickCheckbox('Candy')}
          />
        </label>
        <label>
          Chips
          <input
            type="checkbox"
            className="checkboxItem"
            checked={checkboxes.Chips}
            onChange={() => clickCheckbox('Chips')}
          />
        </label>
        <label>
          Chocolate
          <input
            type="checkbox"
            className="checkboxItem"
            checked={checkboxes.Chocolate}
            onChange={() => clickCheckbox('Chocolate')}
          />
        </label>
        <label>
          Crackers
          <input
            type="checkbox"
            className="checkboxItem"
            checked={checkboxes.Crackers}
            onChange={() => clickCheckbox('Crackers')}
          />
        </label>
        <label>
          Drinks
          <input
            type="checkbox"
            className="checkboxItem"
            checked={checkboxes.Drinks}
            onChange={() => clickCheckbox('Drinks')}
          />
        </label>
        <label>
          Savory
          <input
            type="checkbox"
            className="checkboxItem"
            checked={checkboxes.Savory}
            onChange={() => clickCheckbox('Savory')}
          />
        </label>
      </div>
      </div>
    );
  };

    

  export default CategoryFilter;