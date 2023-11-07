const { Category, Product, User, Order } = require("../models");
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
        order: async (parent, { _id }, context) => {
          if (context.user) {
            const user = await User.findById(context.user._id).populate({
              path: "orders.products",
              populate: "category"
            });
    
            return user.orders.id(_id);
          }
    
          throw AuthenticationError;
        },
        checkout: async (parent, args, context) => {
          const url = new URL(context.headers.referer).origin;
          await Order.create({ products: args.products.map(({ _id }) => _id) });
          const line_items = [];
    
          for (const product of args.products) {
            line_items.push({
              price_data: {
                currency: "usd",
                product_data: {
                  productName: product.productName,
                  productDescription: product.productDescription,
                },
                unit_amount: product.salePrice * 100,
              },
              quantity: product.purchaseQuantity,
            });
          }
    
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`,
          });
    
          return { session: session.id };
        }
    },

  Mutation: {
    createUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
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
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
