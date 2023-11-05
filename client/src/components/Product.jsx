import { useGlobalState } from "../utils/GlobalState";
import Auth from "../utils/auth";

const Product = (product) => {
    const [state, dispatch] = useGlobalState();

    const {
        _id,
        imagePath,
        productName,
        categoryName,
        productPrice,
    } = product;

    return (
        <div>
            {state.products.length != 0 ? (
                <div className="border-1 rounded-xl shadow-gray-400 shadow-xl flex-col w-60 group cursor-pointer relative">
                    <img className="rounded-xl" src={imagePath} />
                    <ul >
                        <li>
                            {categoryName}
                        </li>
                        <li >
                            {productName}
                        </li>
                    </ul>
                    <ul className="flex justify-between m-2 p-2">
                        <li>
                            {productPrice}
                        </li>
                        {Auth.loggedIn() ? (
                            <>
                                <button type="button" className="text-white #D1D5DB hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="contentfill" viewBox="0 0 18 21">
                                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <p>Login to shop</p>

                        )}
                    </ul>
                </div>
            ) : (
                <div>Loading...</div >
            )
            }
        </div>
    )
}

export default Product