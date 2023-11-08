const typeDefs = `
  type User {
    _id: ID
    email: String
    password: String
    orders: [Order]
  }

  type Category {
    _id: ID
    categoryName: String
  }

  type Product {
    _id: ID
    productName: String
    productBrand: String
    productDescription: String
    productPrice: Float
    productCategory: Category
    onSale: Boolean
    saleFactor: Float
    salePrice: Float
    imageSrc: String
    imagePath: String
    quantity: Int
    inStock: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  input ProductInput {
    _id: ID
    productName: String
    salePrice: Float
    quantity: Int
    imagePath: String
    productBrand: String
  }

  type Query {
    getSingleUser: User
    getAllUsers: [User]
    getSingleCategory(categoryId: ID!): Category
    getAllCategories: [Category]
    getSingleProduct(productId: ID!): Product
    getAllProducts: [Product]
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }


  type Mutation {
    createUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
  }
`;

module.exports = typeDefs;
