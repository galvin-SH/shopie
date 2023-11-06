const db = require("../config/connection");
const cleanDB = require("./cleanDB");
const formatFilename = require("./formatFilename");
const fs = require("fs");
const { Category, Product, User } = require("../models");

const categoriesFolder = "../client/src/assets/images/";

async function main() {
    db.once("open", async () => {
        console.log("connected to database");
        await cleanDB("Category", "categories");
        console.log("cleaned category collection");
        await cleanDB("Product", "products");
        console.log("cleaned product collection");
        await seed();
    });
}

async function seed() {
    await fs.readdir(categoriesFolder, (err, dir) => {
        dir.forEach(async (folder) => {
            const isDir = fs.lstatSync(categoriesFolder + folder).isDirectory();
            if (isDir) {
                const category = await Category.create({
                    categoryName: folder,
                });
                console.log(`added category ${folder}`);
                fs.readdir(categoriesFolder + folder, (err, files) => {
                    files.forEach(async (file) => {
                        let brand;
                        let variety;
                        if (file.includes("-")) {
                            brand = formatFilename(file.split("-")[0]);
                            brand =
                                brand.charAt(0).toUpperCase() + brand.slice(1);
                            variety = formatFilename(
                                file.split("-")[1].split(".")[0]
                            );
                            variety =
                                variety.charAt(0).toUpperCase() +
                                variety.slice(1);
                        } else {
                            variety = formatFilename(file.split(".")[0]);
                            variety =
                                variety.charAt(0).toUpperCase() +
                                variety.slice(1);
                        }

                        await Product.create({
                            productName: variety,
                            productBrand: brand ? brand : null,
                            productDescription: "Lorem ipsum dolor sit amet",
                            productPrice:
                                Math.floor(Math.random() * 1000) / 100,
                            productCategory: category._id,
                            onSale: Math.random() < 0.5,
                            saleFactor: Math.floor(Math.random() * 100) / 100,
                            imageSrc: file,
                            quantity: Math.floor(Math.random() * 21),
                        });
                        console.log(`added product ${file}`);
                    });
                });
            }
        });
    });
}

main();
