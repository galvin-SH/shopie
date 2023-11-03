const { Category, Product, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
    Query: {
        // User queries
        getSingleUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
        getAllUsers: async () => {
            return User.find();
        },
        // Category queries
        getSingleCategory: async (parent, { categoryId }) => {
            return Category.findOne({ _id: categoryId });
        },
        getAllCategories: async () => {
            return Category.find();
        },
        // Product queries
        getSingleProduct: async (parent, { productId }) => {
            return Product.findOne({ _id: productId }).populate(
                "productCategory"
            );
        },
        getAllProducts: async () => {
            return Product.find().populate("productCategory");
        },
    },

    Mutation: {
        // User mutations
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },
        // Category mutations
        createCategory: async (parent, { categoryName }) => {
            return Category.create({ categoryName });
        },
        updateCategory: async (parent, { categoryId, categoryName }) => {
            return Category.findOneAndUpdate(
                { _id: categoryId },
                { categoryName },
                { new: true }
            );
        },
        deleteCategory: async (parent, { categoryId }) => {
            return Category.findOneAndDelete({ _id: categoryId });
        },
        // Product mutations
        createProduct: async (
            parent,
            {
                productName,
                productDescription,
                productPrice,
                productCategory,
                onSale,
                saleFactor,
                imageSrc,
            }
        ) => {
            return Product.create({
                productName,
                productDescription,
                productPrice,
                productCategory,
                onSale,
                saleFactor,
                imageSrc,
            });
        },
        updateProduct: async (
            parent,
            {
                productId,
                productName,
                productDescription,
                productPrice,
                productCategory,
            }
        ) => {
            return Product.findOneAndUpdate(
                { _id: productId },
                {
                    productName,
                    productDescription,
                    productPrice,
                    productCategory,
                },
                { new: true }
            );
        },
        deleteProduct: async (parent, { productId }) => {
            return Product.findOneAndDelete({ _id: productId });
        },
    },
};

module.exports = resolvers;
