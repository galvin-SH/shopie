const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Category {
    _id: ID
    categoryName: String
  }
  type Product {
    _id: ID
    productName: String
    productDescription: String
    productPrice: Float
    productCategory: Category
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser: User
    getAllUsers: [User]
    getSingleCategory(categoryId: ID!): Category
    getAllCategories: [Category]
    getSingleProduct(productId: ID!): Product
    getAllProducts: [Product]
  }


  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
