import { useGlobalState } from "../utils/GlobalState";
import Product from "../components/Product";

const ProductPage = () => {
    const [state, dispatch] = useGlobalState();
    console.log(state);

    return (
        <div  >   
            <div className="content-box shadow-xl absolute bg-white p-5">
                {state.products.map((product) => (
                <Product
                    key={product._id}
                    _id={product._id}
                    imagePath={product.imagePath}
                    productName={product.productName}
                    productPrice={product.productPrice}
                    categoryName={product.productCategory.categoryName}
                />
            ))} 
            </div>
        </div>
    );
};
export default ProductPage;
