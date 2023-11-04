import { gql } from '@apollo/client';

export const QUERY_GET_SINGLE_USER = gql`
  query getSingleUser {
    getSingleUser {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;