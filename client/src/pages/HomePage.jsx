import { useEffect } from "react";
import { useGlobalState } from "../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { filterByCategory, sortProducts } from "../utils/sortProducts";

import Marquee from "../components/Marquee";
import CategoryBubbles from "../components/CategoryBubbles";
import CategoryFilter from "../components/CategoryFilter";
import ProductSection from "../components/ProductSection";
import Banner from "../components/Banner";

import BG from "../assets/images/SMILEY-BG.png";

const HomePage = () => {
    const [state, dispatch] = useGlobalState();
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (!loading) {
            dispatch({
                type: "SET_PRODUCTS",
                payload: data.getAllProducts,
            });
        }
    }, [loading]);

    if (state.products.length) {
        console.log(filterByCategory(state.products, "drinks"));
        console.log(sortProducts("asc", "price", state.products));
        console.log(sortProducts("desc", "price", state.products));
        console.log(sortProducts("asc", "name", state.products));
        console.log(sortProducts("desc", "name", state.products));
    }

    return (
        <div>
            <Banner />
            <div className="marqueeBox">
                <Marquee />
            </div>
            <Banner />
            <CategoryBubbles />

            <div className="relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${BG})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "15em",
                    }}></div>
                <img
                    src={BG}
                    alt="smiley faces"
                    className=" bg-white/50"
                />

                <div className="z-10 absolute top-0 display:inline-block grid grid-cols-10 m-10">
                    <div className="col-start-1">
                        <CategoryFilter />
                    </div>
                    <div className="col-start-3">
                        <ProductSection />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
