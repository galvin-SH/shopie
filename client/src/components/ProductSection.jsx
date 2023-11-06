import { useGlobalState } from "../utils/GlobalState";
import Product from "../components/Product";
import Sorter from "./Sorter";

const ProductPage = () => {
    const [state, dispatch] = useGlobalState();

    return (
        <div className="absolute">
        <Sorter />
        <div className="content-box shadow-xl bg-white p-5 h-screen overflow-scroll rounded-b-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {state.products.map((product) => (
                <Product
                    key={product._id}
                    _id={product._id}
                    imagePath={product.imagePath}
                    productName={product.productName}
                    productPrice={product.productPrice}
                    categoryName={product.productCategory.categoryName}
                    quantity={product.quantity}
                />
            ))}
            </div>
        </div>


</div>
    );
};
export default ProductPage;
