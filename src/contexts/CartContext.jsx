import React, { createContext, useContext, useState } from 'react';

// Creación del contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export function useCart() {
  return useContext(CartContext);
}

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Agregar producto al carrito
  const addToCart = (producto) => {
    setCartItems((prevItems) => {
      const { id } = producto;
      if (prevItems[id]) {
        // Si el producto ya está en el carrito, actualiza su cantidad
        return {
          ...prevItems,
          [id]: {
            ...prevItems[id],
            cantidad: prevItems[id].cantidad + producto.cantidad,
          },
        };
      } else {
        // Si el producto es nuevo en el carrito, lo agrega directamente
        return {
          ...prevItems,
          [id]: producto,
        };
      }
    });
  };

  // Remover producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[productId]) {
        delete updatedItems[productId];
      }
      return updatedItems;
    });
  };

  // Incrementar la cantidad de un producto específico
  const incrementProductQuantity = (productId) => {
    console.log(`Incrementing quantity of product ${productId}`);
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[productId]) {
        console.log(`Current quantity: ${newItems[productId].cantidad}`);
        newItems[productId].cantidad += 1;
        console.log(`New quantity: ${newItems[productId].cantidad}`);
      }
      return newItems;
    });
  };
  
  const decrementProductQuantity = (productId) => {
    console.log(`Decrementing quantity of product ${productId}`);
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[productId] && newItems[productId].cantidad > 1) {
        console.log(`Current quantity: ${newItems[productId].cantidad}`);
        newItems[productId].cantidad -= 1;
        console.log(`New quantity: ${newItems[productId].cantidad}`);
      } else if (newItems[productId] && newItems[productId].cantidad === 1) {
        console.log(`Removing product ${productId} from cart`);
        delete newItems[productId];
      }
      return newItems;
    });
  };

  // Obtener el total de ítems en el carrito
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, item) => total + item.cantidad, 0);
  };

  // Proporcionar funciones y estado a través del contexto
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementProductQuantity, decrementProductQuantity, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
