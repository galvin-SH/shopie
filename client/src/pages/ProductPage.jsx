import CategoryBubbles from "../components/CategoryBubbles";
import CategoryFilter from "../components/CategoryFilter";

// import './app.css';

const ProductPage = () => {
    return (

        <div  >
            <CategoryBubbles />
            <CategoryFilter />

            <div className="content-box absolute float-right"> 
            </div>
        </div>
    );
};
export default ProductPage;
