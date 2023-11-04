import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
    query GetAllProducts {
        getAllProducts {
            _id
            productName
            productDescription
            productCategory {
                categoryName
            }
            productPrice
            onSale
            saleFactor
            salePrice
            imagePath
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    query GetAllCategories {
        getAllCategories {
            categoryName
            _id
        }
    }
`;
