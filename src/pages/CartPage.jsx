import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import Wrapper from "../components/Wrapper";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { cart, clearCart, addToCart, removeItemFromCart } = useContext(cartContext);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <section className="pb-6 sm:pb-8 md:pb-10">
      <Wrapper className="px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl pt-12 sm:pt-16 md:pt-24 text-center headline">
          Cart
        </h1>
        <div className="max-w-4xl mx-auto py-6 sm:py-8 md:py-10">
          {cart.length === 0 ? (
            <div className="group relative">
              <button className="w-full sm:w-4/6 mx-auto hover:cursor-pointer active:scale-90 transition duration-300 ease-in-out text-base sm:text-lg md:text-xl py-4 sm:py-6 text-center text-white bg-[#AD343E] rounded-full block group-hover:hidden">
                Your Cart is Empty
              </button>
              <NavLink 
                to="/menu" 
                className="w-full sm:w-4/6 mx-auto hover:cursor-pointer active:scale-90 transition duration-300 ease-in-out text-base sm:text-lg md:text-xl py-4 sm:py-6 text-center text-white bg-[#AD343E] rounded-full hidden group-hover:block"
              >
                Shop Now
              </NavLink>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 max-h-[70vh] sm:max-h-[60vh]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 px-2 sm:px-4 bg-white rounded-lg shadow-sm border border-gray-200 gap-4"
                >
                  {/* Item Name */}
                  <div className="flex-grow min-w-0 w-full sm:w-1/2">
                    <h2 className="text-sm sm:text-base md:text-lg font-bold truncate">
                      {item.name}
                    </h2>
                  </div>

                  {/* Controls and Price */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button
                        className="p-1 sm:p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10  hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out active:scale-95"
                        onClick={() => removeItemFromCart(item)}
                      >
<svg
												fill="#f00000"
												viewBox="0 0 32 32"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												stroke="#f00000"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<title>minus</title>{" "}
													<path d="M15.5 3.5c-7.18 0-13 5.82-13 13s5.82 13 13 13c7.18 0 13-5.82 13-13s-5.82-13-13-13zM22 16.875c0 0.553-0.448 1-1 1h-11c-0.553 0-1-0.447-1-1v-1c0-0.552 0.447-1 1-1h11c0.552 0 1 0.448 1 1v1z"></path>{" "}
												</g>
											</svg>
                      </button>
                      <p className="text-sm sm:text-base md:text-lg font-semibold w-8 sm:w-10 text-center">
                        {item.quantity}
                      </p>
                      <button
                        className="p-1 sm:p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10  hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out active:scale-95"
                        onClick={() => addToCart(item)}
                      >
                        <svg
												viewBox="0 0 1024 1024"
												class="icon"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												fill="#000000"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<path
														d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
														fill="#4CAF50"
													></path>
													<path
														d="M448 298.666667h128v426.666666h-128z"
														fill="#FFFFFF"
													></path>
													<path
														d="M298.666667 448h426.666666v128H298.666667z"
														fill="#FFFFFF"
													></path>
												</g>
											</svg>
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-sm sm:text-base md:text-lg font-semibold w-20 sm:w-24 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cart.length > 0 && (
            <div className="mt-6 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-right border-t border-gray-700 pt-2">
                Total: $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <div className="mt-4 flex flex-col-reverse sm:flex-row justify-between gap-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-red-600 hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out active:scale-95 text-sm sm:text-base"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
                <NavLink
                  to="/checkout"
                  className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-center hover:bg-green-600 hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out active:scale-95 text-sm sm:text-base"
                >
                  Place Order
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default CartPage;