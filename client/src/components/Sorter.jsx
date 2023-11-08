import { useState } from "react";
import { useGlobalState } from "../utils/GlobalState";

const Sorter = (props) => {
	const [showDropDown, setDropDown] = useState(false);
	const [state, dispatch] = useGlobalState();

	return (
		<div className="content-box shadow-xl bg-white p-5 rounded-t-xl flex border-b">
			<div className="flex-1 text-left">
				<p className="">Found {props.productTotal} Products</p>
			</div>
			<div className="flex">
				<div className="relative">
					<label className="relative items-baseline cursor-pointer"></label>
				</div>
				<button
					type="button"
					className="py-1.5 px-4 ml-8 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border-2 border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:scale-110 ease-in duration-300 dark:hover:text-white dark:hover:bg-gray-700 flex space-between"
				>
					Sort by
					<svg
						className="w-2.5 h-2.5 ml-2 mt-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 1 4 4 4-4"
						/>
					</svg>
				</button>
			</div>

			{/* <!-- Dropdown menu --> */}
			<div
				id="dropdownRadioBgHover"
				className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
			>
				<ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
					<li>
						<div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover-bg-gray-600">
							<input
								id="default-radio-4"
								type="radio"
								value=""
								name="default-radio"
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								htmlFor="default-radio-4"
								className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
							>
								Default radio
							</label>
						</div>
					</li>
					<li>
						<div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover-bg-gray-600">
							<input
								defaultChecked
								id="default-radio-5"
								type="radio"
								value=""
								name="default-radio"
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								htmlFor="default-radio-5"
								className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
							>
								Checked state
							</label>
						</div>
					</li>
					<li>
						<div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover-bg-gray-600">
							<input
								id="default-radio-6"
								type="radio"
								value=""
								name="default-radio"
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								htmlFor="default-radio-6"
								className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
							>
								Default radio
							</label>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Sorter;
