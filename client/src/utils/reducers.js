export const reducer = (state, action) => {
	switch (action) {
		case "UPDATE_PRODUCTS":
			return {
				...state,
				products: [...state.products, action.payload]
			};
		default:
			return state;
	}
}
