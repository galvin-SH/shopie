import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers"

const GlobalState = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalState = () => {
  return useContext(GlobalState);
};

export { StoreProvider, useGlobalState };
