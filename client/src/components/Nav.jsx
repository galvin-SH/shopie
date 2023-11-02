import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Cart from "../components/Cart";

function Nav() {
  return (
    <Navbar fluid rounded className="border-2 rounded-lg p-3 border-gray-300">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">Services</Navbar.Link>
        <Navbar.Link as={Link} to="#">Pricing</Navbar.Link>
        <Navbar.Link as={Link} to="#">Contact</Navbar.Link>
        <Cart />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;