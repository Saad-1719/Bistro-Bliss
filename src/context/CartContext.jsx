import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const sessionData = sessionStorage.getItem("cart");
    return sessionData ? JSON.parse(sessionData) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
      return;
    }
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem("cart"); // Clear manually when called
  };

  const removeItemFromCart = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(updatedCart);
    }
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, clearCart, removeItemFromCart }}>
      {children}
    </cartContext.Provider>
  );
};