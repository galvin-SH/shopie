import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'; 
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_CATEGORIES } from '../utils/queries';

function CategoryBubbles() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, error, data } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: data.categories,
      });
    }
  }, [data, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
