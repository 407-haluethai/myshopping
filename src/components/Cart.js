// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 100;
  const grandTotal = totalPrice + shippingFee;

  return (
    <div>
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <p>{item.name} - ${item.price} x {item.quantity}</p>
          <button onClick={() => onRemoveFromCart(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      <div className="mt-4">
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping: ${shippingFee}</p>
        <p>Grand Total: ${grandTotal}</p>
      </div>
    </div>
  );
};

export default Cart;
