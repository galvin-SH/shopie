import { useGlobalState } from "../utils/GlobalState";
import Product from "../components/Product";
import Sorter from "./Sorter";

const ProductPage = () => {
    const [state, dispatch] = useGlobalState();
    let filteredArray = [];

    if(state.sortCategory !== "") {
        filteredArray = state.products.filter(product => {
            return product.productCategory.categoryName == state.sortCategory.toLowerCase();
        });
    } else {
        filteredArray = state.products;
    }

    return (
        <div className="absolute">
        <Sorter productTotal={filteredArray.length}/>
        <div className="content-box shadow-xl bg-white p-5 h-screen overflow-scroll rounded-b-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredArray.map((product) => (
                <Product
                    key={product._id}
                    _id={product._id}
                    imagePath={product.imagePath}
                    productName={product.productName}
                    salePrice={product.salePrice}
                    productBrand={product.productBrand}
                    quantity={product.quantity}
                />
            ))}
            </div>
        </div>


</div>
    );
};
export default ProductPage;
