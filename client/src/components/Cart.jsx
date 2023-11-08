import { useGlobalState } from "../utils/GlobalState";
import { useState } from "react"
import { useEffect } from "react";
import { XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import { Modal } from "flowbite-react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function Cart() {
    const [state, dispatch] = useGlobalState();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    const getTotal = () => {
        let total = 0
        for (let i = 0; i < state.cart.length; i++) {
            total += (state.cart[i].salePrice * state.cart[i].quantity);
        }
        return total.toFixed(2);
    }

    const removeFromCart = product => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product._id
        });
    };

    function submitCheckout() {
        getCheckout({
            variables: {
                products: [...state.cart],
            },
        });
    }

    return (
        <>
            <ShoppingBagIcon onClick={() => setOpenModal(true)} className="h-7 w-7 my-3 cursor-pointer text-gray hover:scale-110 ease-in duration-300" />
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <div className='inset-0'>

                        <div className="flex items-start justify-between">
                            <h4 className="text-lg font-medium text-gray-900" >Your Items</h4>
                            <div className="ml-3 flex h-7 items-center">
                                <button
                                    type="button"
                                    className="relative m-2 p-2 text-gray-400 hover:text-gray-500"
                                    onClick={() => setOpenModal(false)}>
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>


                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {state.cart.map((product) => (
                                        <li key={product._id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.imagePath}
                                                    className="h-full w-full object-cover object-center" />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            {product.productName}
                                                        </h3>
                                                        <p className="ml-4">{product.salePrice.toFixed(2)}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty {product.quantity}</p>
                                                    <div className="flex">
                                                        <button onClick={() => removeFromCart(product)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${getTotal()}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">

                                <button onClick={submitCheckout} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</button>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>

    )
}