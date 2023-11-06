import { useGlobalState } from "../utils/GlobalState";
import Savory from "../assets/bubbles/Savory.png";
import Chips from "../assets/bubbles/Chips.png";
import Candy from "../assets/bubbles/Candy.png";
import Chocolate from "../assets/bubbles/Chocolate.png";
import Drinks from "../assets/bubbles/Drinks.png";
import Crackers from "../assets/bubbles/Crackers.png";


const CategoryBubbles = () => {
	const [state, dispatch] = useGlobalState();

	const setSortCategory = (category) => {
		dispatch({
			type: "SET_SORTCATEGORY",
			payload: category
		});
	}	
  

	return (
		<div className="bubble-container  ">
			{/* <a href="#" target="_blank"> */}
				<div className="hover:scale-110 ease-in duration-300 cursor-pointer bubble">
          <button  onClick={() => setSortCategory("Candy")}>
          <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
					<img src={Candy} alt="Candy" className=" w-14" />
          </div>
          <p>
					CANDY
				  </p>
          </button>
				</div>
    
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Chips")}>
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
					<img src={Chips} alt="Chips" className=" w-14" />
          </div>
          <p>
					CHIPS
				</p>
          </button>
				</div>
			
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Chocolate")}>
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
					<img src={Chocolate} alt="Chocolate" className="w-14" />
          </div>
          <p>
					CHOCOLATE
				</p>
          </button>

				</div>
				
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Crackers")}>
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
					<img src={Crackers} alt="Crackers" className="w-14" />
          </div>
          <p >
					CRACKERS
				</p>
          </button>
				</div>
			
			{/* </a>
			<a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer ">
        <button onClick={() => setSortCategory("Drinks")}>
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
					<img src={Drinks} alt="Drinks" className="w-14" />
          </div>
          <p>
					DRINKS
				</p>
          </button>
				</div>
			
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Savory")}>
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
					<img src={Savory} alt="Savory" className="w-14" />
          </div>
          <p>
					SAVORY
				</p>
          </button>
				</div>
				
			{/* </a> */}
		</div>
	);
}

export default CategoryBubbles;

