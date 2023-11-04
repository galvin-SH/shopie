export const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_PRODUCTS":
			console.log("Reducer: ")
			console.log(action)
			return {
				...state,
				products: [action.value]
			};
		default:
			console.log("Defualt")
			return state;
	}
}
