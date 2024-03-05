import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId, quantity) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + quantity,
    }));
  };

  const removeFromCart = (productId, quantity) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: Math.max(0, (prevItems[productId] || 0) - quantity),
    }));
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, getTotalItems, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};