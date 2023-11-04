import { useEffect } from 'react';
import { useGlobalState } from "../utils/GlobalState";
import { useQuery} from "@apollo/client"
import { QUERY_PRODUCTS } from "../utils/queries";

import Marquee from "../components/Marquee"
import CategoryBubbles from "../components/CategoryBubbles";
import CategoryFilter from "../components/CategoryFilter";
import ProductSection from "../components/ProductSection";

const HomePage = () => {
    const [state, dispatch] = useGlobalState();
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if(!loading) {
            console.log(data);
            dispatch({
                type: "UPDATE_PRODUCTS",
                value: data.getAllProducts,
            });
        }
    }, [loading]);

    return (
        <div>
            <Marquee/>
            <CategoryBubbles/>
            <CategoryFilter/>
            <ProductSection/>
        </div>
       
    );
};
export default HomePage;
