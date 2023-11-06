// this function will return a filtered array of products based on the category name passed in as an argument
const filterByCategory = (productsArray, categoryName) => {
    return productsArray.filter(
        (product) => product.productCategory.categoryName === categoryName
    );
};

// the exported function will sort the filtered array of products based on sortDirection and sortBy passed in as arguments
sortProducts = (sortDirection, sortBy, productsArray) => {
    try {
        switch (sortBy) {
            case "price":
                return sortDirection === "asc"
                    ? productsArray.toSorted((a, b) => a.price - b.price)
                    : productsArray
                          .toSorted((a, b) => a.price - b.price)
                          .reverse();
            case "name":
                return sortDirection === "asc"
                    ? productsArray.toSorted((a, b) => a.name - b.name)
                    : productsArray
                          .toSorted((a, b) => a.name - b.name)
                          .reverse();
        }
    } catch (err) {
        console.error(err);
    }
};
