// this function will return a filtered array of products based on the categoryName passed in as an argument
// productsArray is an array of products containing the products to be filtered
// categoryName is a string representing the name of the category to filter by
// returns a new filtered array of products
export const filterByCategory = (productsArray, categoryName) => {
    return productsArray.filter(
        (product) => product.productCategory.categoryName === categoryName
    );
};

// this function will return a sorted array of products based on the sortDirection and sortBy fields passed in as arguments
// sortDirection is a string, "asc" for ascending order and defaults to descending order in all other cases
// sortBy is a string, "price" for sorting by the price of the product and "name" for sorting by name of the product
// productsArray is an array of products containing the products to be sorted
// returns a new sorted array of products
export const sortProducts = (sortDirection, sortBy, productsArray) => {
    try {
        switch (sortBy) {
            case "price":
                return sortDirection === "asc"
                    ? productsArray.toSorted(
                          (a, b) => a.salePrice - b.salePrice
                      )
                    : productsArray
                          .toSorted((a, b) => a.salePrice - b.salePrice)
                          .reverse();
            case "name":
                return sortDirection === "asc"
                    ? productsArray.toSorted((a, b) =>
                          a.productName.localeCompare(b.productName)
                      )
                    : productsArray
                          .toSorted((a, b) =>
                              a.productName.localeCompare(b.productName)
                          )
                          .reverse();
        }
    } catch (err) {
        console.error(err);
    }
};
