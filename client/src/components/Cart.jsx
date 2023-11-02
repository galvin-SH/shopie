import { Link } from "react-router-dom";
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

function Cart() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>CART</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>YOUR CART</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Item image preview
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>CHECKOUT</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;