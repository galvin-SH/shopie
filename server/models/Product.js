const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        productDescription: {
            type: String,
            required: true,
            trim: true,
        },
        productPrice: {
            type: Number,
            required: true,
            trim: true,
        },
        productCategory: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
    },
    {
        toJSON: {},
        timestamps: false,
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
