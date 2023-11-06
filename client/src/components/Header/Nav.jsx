import { useState } from "react";
import { Link } from "react-router-dom";
import SHLogo from "../../assets/images/SNACK-HAPPY.gif"
import { Navbar, Modal, Tabs } from "flowbite-react";
import Cart from "../Cart";
import LoginForm from "./LoginForm";
import Auth from "../../utils/auth";
import { UserCircleIcon, MoonIcon, HomeIcon } from "@heroicons/react/24/outline"
import SignupForm from "./SignupForm";



function Nav() {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);

	return (
		<>		
			<Navbar fluid rounded className="p-1 border-gray-300">
				<Navbar.Brand as={Link} href="https://flowbite-react.com">
            		<img src={SHLogo} className="h-12 sm:h-12" alt="Happy Snack" />
        		</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="p-1 mx-10" >
					<Navbar.Link as={Link} to="#">
                		<HomeIcon className="h-7 w-7 mt-3 cursor-pointer  text-black hover:scale-110 ease-in duration-300" />
            		</Navbar.Link>
            		<Navbar.Link as={Link} to="#">
                		<MoonIcon className="h-7 w-7 mt-3 cursor-pointer  text-black hover:scale-110 ease-in duration-300" />
            		</Navbar.Link>
					{Auth.loggedIn() ? (
						<>
							<Navbar.Link onClick={Auth.logout}>
                				<UserCircleIcon className="h-6 w-6 cursor-pointer  text-black hover:scale-110 ease-in duration-300" />
            				</Navbar.Link>
							<Cart />
						</>
					) : (
						<button onClick={() => setShowSignUpModal(true)} type="button" className="py-1.5 px-4 mr-2 mb-2 mt-2  text-sm font-medium text-black focus:outline-none bg-white rounded-lg border-2 border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:scale-110 ease-in duration-300 dark:hover:text-white dark:hover:bg-gray-700">Login/Sign Up</button>
					)}
				</Navbar.Collapse>
			</Navbar>
			<Modal show={showSignUpModal} onClose={() => setShowSignUpModal(false)}>
				{/* <LoginForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/> */}
				<SignupForm />
			</Modal>
			<Modal dismissible show={showSignUpModal} onClose={() => setShowSignUpModal(false)}>
				<SignupForm />
			</Modal>
		</>
	);
}
export default Nav;