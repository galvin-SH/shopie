// this function will return a filtered array of products based on the category name passed in as an argument
const filterByCategory = (productsArray, categoryName) => {
    return productsArray.filter(
        (product) => product.productCategory.categoryName === categoryName
    );
};

// the exported function will sort the filtered array of products based on sortDirection and sortBy passed in as arguments
module.exports = (sortDirection, sortBy, productsArray, categoryName) => {
    try {
        const filteredArray = filterByCategory(productsArray, categoryName);
        if (sortDirection === "asc") {
            // if sortDirection is "asc" then sort the filtered array in ascending order
            return filteredArray.toSorted((a, b) => a.sortBy - b.sortBy);
        } else if (sortDirection === "desc") {
            // if sortDirection is "desc" then sort the filtered array in descending order
            return filteredArray
                .toSorted((a, b) => a.sortBy - b.sortBy)
                .reverse();
        }
    } catch (err) {
        console.error(err);
    }
};
