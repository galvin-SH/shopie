import { useGlobalState } from "../utils/GlobalState";
import { useLazyQuery } from "@apollo/client"
import { QUERY_PRODUCTS } from "../utils/queries";

import Marquee from "../components/Marquee"
import CategoryBubbles from "../components/CategoryBubbles";
import CategoryFilter from "../components/CategoryFilter";
import ProductSection from "../components/ProductSection";

const HomePage = () => {
    const [state, dispatch] = useGlobalState();
    const [getData, { data }] = useLazyQuery(QUERY_PRODUCTS);

    // async function runGetData() {
    //     await getData();
    //     console.log(data);
    // }

    //runGetData();
    // dispatch({
    //     type: "UPDATE_PRODUCTS",
    //     value: data.getAllProducts,
    // });

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
