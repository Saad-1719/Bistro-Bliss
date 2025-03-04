import React, { useContext, useEffect, useRef } from "react";
import { cartContext } from "../context/CartContext";

const Modal = ({ onClose }) => {
  const { cart, clearCart, addToCart, removeItemFromCart } = useContext(cartContext);
  const dialogRef = useRef(null);


  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClearAndClose = () => {
    clearCart();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="text-white rounded-2xl bg-black/90 flex flex-col p-6 w-full max-w-md mx-auto fixed inset-0 m-auto h-fit shadow-lg backdrop-blur-md"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl text-yellow-400 font-extrabold text-center flex-1">Cart</h1>
        <button onClick={onClose} className="text-gray-300 hover:text-red-500 transition-transform transform hover:scale-110">
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 ">
              <div className="flex-grow min-w-0">
                <h2 className="text-lg font-medium truncate">{item.name}</h2>
              </div>
              <p className="text-base font-semibold w-16 text-right pr-4">${(item.price * item.quantity).toFixed(2)}</p>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-lg w-8 h-8 hover:bg-green-600"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <p className="text-lg font-semibold">{item.quantity}</p>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg w-8 h-8 hover:bg-red-600"
                  onClick={() => removeItemFromCart(item)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-bold text-right border-t border-gray-700 pt-2">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={handleClearAndClose}
            >
              Clear Cart
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
              Place Order
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default Modal;