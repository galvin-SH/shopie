import Marquee from "../components/Marquee"
import ProductPage from "../pages/ProductPage";
// import CategoryFilter from "../components/CategoryFilter";

const HomePage = () => {
    return (
        <div>
            
            <Marquee />
            <ProductPage />
            
            <CategoryFilter />
        </div>
       
    );
};
export default HomePage;
