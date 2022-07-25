import React from "react";

function Cart({ open, children, onClose }) {
  if (open === false) {
    return null;
  }
  return (
    <>
      <h1>{children}</h1>

      <h1>
        <button onClick={onClose}>Close</button>
      </h1>
    </>
  );
}

export default Cart;
