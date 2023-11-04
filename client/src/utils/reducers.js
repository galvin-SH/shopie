export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: [...action]
      };
  }
}