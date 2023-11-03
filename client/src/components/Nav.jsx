import { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Modal, Tabs } from "flowbite-react";
import LogoWhite from "../assets/images/HAPPY-SNACKS-white.gif"
import Cart from "../components/Cart";
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';



function Nav() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Navbar fluid rounded className="border-2 rounded-lg p-3 border-gray-300">
				<Navbar.Brand as={Link} href="https://flowbite-react.com">
					<img src={LogoWhite} className="mr-3 h-6 sm:h-9" alt="Happy Snack" />
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link as={Link} to="#" active>Home</Navbar.Link>
					<Navbar.Link as={Link} to="#">About</Navbar.Link>
					<Navbar.Link as={Link} to="#">Menu</Navbar.Link>
					{Auth.loggedIn() ? (
						<>
							<Navbar.Link onClick={Auth.logout}>Logout</Navbar.Link>
						</>
					) : (
						<Navbar.Link onClick={() => setShowModal(true)}>Login/Sign Up</Navbar.Link>

					)}
					<Navbar.Link as={Link} to="#">Dark Mode</Navbar.Link>
					<Cart />
				</Navbar.Collapse>
			</Navbar>
			<Modal dismissible show={showModal} onClose={() => setShowModal(false)}>
				<Modal.Header>
					Login/Sign Up
				</Modal.Header>
				<Modal.Body>
					<Tabs aria-label="Default tabs" style="default">
						<Tabs.Item active title="test1">
							Example 1
						</Tabs.Item>
						<Tabs.Item title="test2">
							Example 2
						</Tabs.Item>
					</Tabs>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Nav;