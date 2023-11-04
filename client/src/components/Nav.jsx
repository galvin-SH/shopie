import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import SHLogo from "../assets/images/SNACK-HAPPY.gif"
import Cart from "../components/Cart";
import { UserCircleIcon, MoonIcon, HomeIcon } from '@heroicons/react/24/outline'

function Nav() {
  return (
    <Navbar fluid rounded className="p-1 border-gray-300">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <img src={SHLogo} className="h-12 sm:h-12" alt="Happy Snack" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link as={Link} to="#">
                <HomeIcon className="h-6 w-6 cursor-pointer text-black hover:scale-110 ease-in duration-300" />
            </Navbar.Link>
            <Navbar.Link as={Link} to="#">
                <UserCircleIcon className="h-6 w-6 cursor-pointer  text-black hover:scale-110 ease-in duration-300" />
            </Navbar.Link>
            <Navbar.Link as={Link} to="#">
                <MoonIcon className="h-6 w-6 cursor-pointer text-black hover:scale-110 ease-in duration-300" />
            </Navbar.Link>
            <Cart />
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;