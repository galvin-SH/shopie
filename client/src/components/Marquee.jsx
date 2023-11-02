import { Carousel } from "flowbite-react";
// import { Link } from "react-router-dom";
import  Product  from "./Product";


function Marquee() {
  return (
    <div className="hero-marquee">
    <div className="hero-marquee__grid">
     <div className= "hero-marquee-item lazyloaded">

   
       <Product/>

       </div>
    </div>
    </div>
  );
}

export default Marquee