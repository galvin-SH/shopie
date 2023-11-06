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
		<div className="bubble-container">
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer" >
          <button onClick={() => setSortCategory("Candy")}>
					<img src={Candy} alt="Candy" className="w-14" />
          <p>
					CANDY
				</p>
          </button>
				</div>
        
			
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Chips")}>
					<img src={Chips} alt="Chips" className="w-14" />
          <p>
					CHIPS
				</p>
          </button>
				</div>
			
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Chocolate")}>
					<img src={Chocolate} alt="Chocolate" className="w-14" />
          <p>
					CHOCOLATE
				</p>
          </button>
				</div>
				
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Crackers")}>
					<img src={Crackers} alt="Crackers" className="w-14" />
          <p>
					CRACKERS
				</p>
          </button>
				</div>
			
			{/* </a>
			<a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Drinks")}>
					<img src={Drinks} alt="Drinks" className="w-14" />
          <p>
					DRINKS
				</p>
          </button>
				</div>
			
			{/* </a> */}
			{/* <a href="#" target="_blank"> */}
				<div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer">
        <button onClick={() => setSortCategory("Savory")}>
					<img src={Savory} alt="Savory" className="w-14" />
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

