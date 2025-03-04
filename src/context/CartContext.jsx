import React, { createContext, useState } from "react";

export const cartContext = createContext();
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addToCart = (item) => {
		const exisitingItem = cart.find((cartItem) => cartItem.id === item.id);
		if (exisitingItem) {
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
    console.log(cart);
    
    const clearCart = () => {
		setCart([]);
    };
    
    const removeItemFromCart = (item) =>
    {
        if (item.quantity > 1)
        {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id
                    ? {...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
            setCart(updatedCart);
        }
        else {
            
            const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
            setCart(updatedCart);
        }
    }

	return (
		<cartContext.Provider value={{ cart, addToCart,clearCart,removeItemFromCart }}>
			{children}
		</cartContext.Provider>
	);
};
