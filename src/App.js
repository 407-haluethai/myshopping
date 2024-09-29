// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">My Shopping Cart</h1>
      <div className="flex">
        <div className="flex-1">
          <ProductList onAddToCart={handleAddToCart} />
        </div>
        <div className="w-1/3 ml-4">
          <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
