export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				...state,
				products: [...action.payload]
			};
		case "SET_SORTCATEGORY":
			return {
				...state,
				sortCategory: action.payload
			};
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		default:
			return state;
	}
}
