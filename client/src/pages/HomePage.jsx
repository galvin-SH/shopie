import { useEffect } from 'react';
import { useGlobalState } from "../utils/GlobalState";
import { useQuery} from "@apollo/client"
import { QUERY_PRODUCTS } from "../utils/queries";
import Product from "../components/Product";
import Marquee from "../components/Marquee";
import CategoryBubbles from "../components/CategoryBubbles";
import CategoryFilter from "../components/CategoryFilter";
import ProductSection from "../components/ProductSection";

const HomePage = () => {
    const [state, dispatch] = useGlobalState();
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if(!loading) {
            dispatch({
                type: "SET_PRODUCTS",
                payload: data.getAllProducts,
            });
        }
    }, [loading]);

    return (
        <div>
            <Marquee/>
            <CategoryBubbles/>
            <CategoryFilter/>
            <ProductSection/>
            <Product />
        </div>
       
    );
};
export default HomePage;
