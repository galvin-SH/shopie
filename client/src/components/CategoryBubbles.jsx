import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'; 
import { QUERY_CATEGORIES } from '../utils/queries';

function CategoryBubbles() {
  const { loading, error, data } = useQuery(QUERY_CATEGORIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const categories = data.categories;

  return (
    <div>
      {categories.map((category) => (
        <Link to={`/category/${category._id}`} key={category._id}>
          <div>
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryBubbles;
