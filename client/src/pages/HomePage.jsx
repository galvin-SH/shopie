import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import Marquee from "../components/Marquee";

import CategoryBubbles from "../components/CategoryBubbles";
import CategoryFilter from "../components/CategoryFilter";
import ProductSection from "../components/ProductSection";

const HomePage = () => {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.getAllProducts || [];

    return (
        <div>
            <div className="marqueeBox">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Marquee products={products} />
                )}
            </div>
            <CategoryBubbles />
            <CategoryFilter />
            <ProductSection />
        </div>
    );
};
export default HomePage;
