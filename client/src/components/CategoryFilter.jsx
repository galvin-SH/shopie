import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';

const style = {
  borderStyle: "solid",
  borderWidth: "5px",
  float: "left",
  width: "400px",
  height: "650px",
  marginLeft: ".5em",
  marginTop: "1em",
};

// Still needs work done. Will come back to it

function CategoryFilter() {
  //const { loading, error, data } = useQuery(QUERY_CATEGORIES);
  //const [selectedCategories, setSelectedCategories] = useState([]);

  //const [state, dispatch] = useStoreContext();

  // const onClick = (category) => {
  //   if (selectedCategories.includes(category)) {
  //     const updatedCategories = setSelectedCategories.filter((category) => category !== DeselectCategory);

  //     setSelectedCategories(updatedCategories);

  //     dispatch({
  //       type: "UPDATE_CATEGORIES",
  //       categories: updatedCategories,
  //     });
  //   } else {
  //     setSelectedCategories([...selectedCategories, category]);

  //     dispatch({
  //       type: "UPDATE_CATEGORIES",
  //       categories: [...selectedCategories, category],
  //     })

  //   }
  // }

  //const categories = data.categories;

  return (
    <div style={style}>
      <h2>Categories</h2>
      <div>
        {/* {categories.map((category) => (
          <label key={category._id}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.name)}
              onChange={() => handleCategoryClick(category.name)}
            />
            {category.name}
          </label>
        ))} */}
      </div>
    </div>
  )
}

export default CategoryFilter;