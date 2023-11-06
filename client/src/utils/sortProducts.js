// this function will return a filtered array of products based on the category name passed in as an argument
export const filterByCategory = (productsArray, categoryName) => {
    return productsArray.filter(
        (product) => product.productCategory.categoryName === categoryName
    );
};

// the exported function will sort the filtered array of products based on sortDirection and sortBy passed in as arguments
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
                    ? productsArray.toSorted(
                          (a, b) => a.productName - b.productName
                      )
                    : productsArray
                          .toSorted((a, b) => a.productName - b.productName)
                          .reverse();
        }
    } catch (err) {
        console.error(err);
    }
};
