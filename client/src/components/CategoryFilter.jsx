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
  height: "650px"
};

// Still needs work done. Will come back to it

function CategoryFilter() {
  
  return (
    <div>
      <label>
        Candy
            <input type="checkbox" />
      </label>
    </div>
  )
}

  

export default CategoryFilter;