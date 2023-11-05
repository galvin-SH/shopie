import { useGlobalState } from "../utils/GlobalState";
 
const Product = () => {
    const [state, dispatch] = useGlobalState();
    
    return (
        <div className="border-1 rounded-xl shadow-gray-400 shadow-xl flex-col w-40 group cursor-pointer relative hover:scale-110 ease-in duration-300">
                {/* <img  */}
                {/* image, title, description, price, add to cart button 
                 */}
            
        </div>
    )
}

export default Product