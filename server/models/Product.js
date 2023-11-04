const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        // This is the name of the product
        productName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        // This is the description of the product
        productDescription: {
            type: String,
            required: true,
            trim: true,
        },
        // This is the price of the product
        productPrice: {
            type: Number,
            required: true,
            trim: true,
        },
        // This is the category of the product
        productCategory: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
        // This is a boolean to determine if the product is on sale or not
        onSale: {
            type: Boolean,
            default: false,
        },
        // This is multiplied by the productPrice to get the salePrice
        saleFactor: {
            type: Number,
            default: 1,
        },
        // This will be the filename of the uploaded image, the virtual below will return the path
        imageSrc: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {},
        timestamps: false,
        virtuals: true,
        getters: true,
    }
);

productSchema.virtual("salePrice").get(function () {
    if (!this.onSale) {
        return this.productPrice;
    } else {
        return this.productPrice * this.saleFactor;
    }
});

productSchema.virtual("imagePath").get(function () {
    return `./src/assets/images/${this.imageSrc}`;
});

const Product = model("Product", productSchema);

module.exports = Product;
