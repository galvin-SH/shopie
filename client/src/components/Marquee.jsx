import { Carousel } from "flowbite-react";
// import { Link } from "react-router-dom";
import  Product  from "./Product";


function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
       <Product>
       </Product>
      </Carousel>
    </div>
  );
}

export default Component