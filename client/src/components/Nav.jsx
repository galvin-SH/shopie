import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import LogoWhite from "../assets/images/HAPPY-SNACKS-white.gif"

function Nav() {
  return (
    <Navbar fluid rounded className="border-2 rounded-lg p-3 border-gray-300">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={LogoWhite} className="mr-3 h-6 sm:h-9" alt="Happy Snack" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">Menu</Navbar.Link>
        <Navbar.Link as={Link} to="#">Login</Navbar.Link>
        <Navbar.Link as={Link} to="#">Dark Mode</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;