import { useGlobalState } from "../utils/GlobalState";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Modal } from "flowbite-react";
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
const Product = (product) => {
    const [state, dispatch] = useGlobalState();

    const [openModal, setOpenModal] = useState(false);

    const {
        _id,
        imagePath,
        productName,
        productBrand,
        salePrice,
        quantity,
    } = product;

    const addToCart = () => {
        const duplicate = state.cart.find((cartItem) => cartItem._id === _id)
        if (duplicate) {
            console.log("Testing: Duplicate");
        } else {
            dispatch({
                type: "ADD_TO_CART",
                payload: { ...product }
            });
        }
    }

    return (
        <div>
            {state.products.length != 0 ? (
                <div className="border-1 rounded-md shadow-gray-400 shadow-xl flex-col cursor-pointer m-10 hover:scale-110 ease-in duration-300">
                    <img onClick={() => setOpenModal(true)} className="rounded-t-lg" src={imagePath} />
                    <ul >
                        <li >
                            {productBrand}
                        </li>
                        <li >
                            {productName}
                        </li>
                    </ul>
                    <ul className="flex justify-between m-1 p-1">
                        <li>
                            $ {salePrice.toFixed(2)}
                        </li>
                        
                        <button onClick={addToCart} type="button" className="text-black #D1D5DB  focus:outline-none font-medium rounded-lg text-sm text-center flex">
                            Add to Bag
                            <ShoppingBagIcon className="ml-1 w-4 cursor-pointer text-gray hover:scale-150 ease-in duration-300" />
                        </button>
                      

                    </ul>
                </div>
            ) : (
                <div>Loading...</div >
            )
            }
            <Link as={Link} to="#" onClick={() => setOpenModal(true)}>
            </Link>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <div className='inset-0'>
                        <div className="ml-3 flex h-5 items-center">
                            <button
                                type="button"
                                className="absolute mr-3 text-gray-400 hover:text-gray-500 right-0"
                                onClick={() => setOpenModal(false)}>
                                <span className="relative -inset-.25" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6 float-left" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="flex items-start justify-between ">
                            <img
                                src={imagePath}
                                className=" w-40 object-cover object-center" />
                            <div className="flow-root">
                                <ul role="list" className="-my-5 divide-y divide-gray-200">
                                    <li key={product.id} className="flex py-6">
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-around text-base font-medium text-gray-900 mb-4">
                                                    <ul >
                                                        <li className="p-1 text-2xl" >
                                                            {productName}
                                                        </li>
                                                        <li className="p-1 flex align-center" >
                                                            <p className="text-xl">
                                                                ${salePrice.toFixed(2)}
                                                            </p>
                                                            <p className="ml-4 text-lg">
                                                                In Stock: {quantity}
                                                            </p>
                                                        </li>
                                                        <li className="p-1" >
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi exercitationem quisquam eveniet eligendi rerum quod aliquam possimus.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <div className="flex">
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 sm:px-1">
                            <div className="mt-5 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    <button
                                        type="button"
                                        className="text-xl text-indigo-600 hover:text-indigo-500"
                                        onClick={() => {setOpenModal(false); addToCart();}}
                                    >
                                        Add to Cart
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Product