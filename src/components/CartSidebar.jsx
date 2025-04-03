import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const CartSidebar = ({ isOpen, onClose }) => {
	const { cart, clearCart, addToCart, removeItemFromCart } =
		useContext(cartContext);

	const handleClearCart = () => {
		clearCart();
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		// Cleanup function to remove class when unmounting
		return () => document.body.classList.remove("overflow-hidden");
	}, [isOpen]);

	// Animation variants
	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
	};

	const sidebarVariants = {
		hidden: { x: "100%" },
		visible: {
			x: 0,
			transition: {
				type: "spring",
				stiffness: 120,
				damping: 20,
				mass: 0.8,
			},
		},
		exit: {
			x: "100%",
			transition: {
				duration: 0.3,
				ease: [0.4, 0, 0.2, 1],
			},
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={overlayVariants}
					onClick={onClose}
				>
					<motion.aside
						variants={sidebarVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl z-50 flex flex-col"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className="flex justify-between items-center p-6 border-b border-gray-200">
							<h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
							<button
								className="p-2 rounded-full hover:bg-gray-100  hover:cursor-pointer active:scale-90 transition duration-300 ease-in-out hover:scale-110"
								onClick={onClose}
								aria-label="Close cart"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						{/* Cart Content */}
						<div className="flex-1 overflow-y-auto p-6">
							{cart.length === 0 ? (
								<div className="flex flex-col items-center justify-center h-full text-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-16 w-16 text-gray-400 mb-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1}
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<h3 className="text-lg font-medium text-gray-700 mb-2">
										Your cart is empty
									</h3>
									<p className="text-gray-500 mb-6">
										Start adding some delicious items to your cart
									</p>
									<NavLink
										to="/menu"
										className="px-6 py-3 bg-[#AD343E] text-white rounded-lg hover:bg-[#8c2b34] transition-colors duration-300 ease-in-out"
										onClick={onClose}
									>
										Browse Menu
									</NavLink>
								</div>
							) : (
								<>
									<div className="space-y-4">
										{cart.map((item) => (
											<div
												key={item.id}
												className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg"
											>
												<div className="flex-1 min-w-0">
													<h3 className="text-lg font-bold text-gray-800 truncate">
														{item.name}
													</h3>
													<p className="text-lg text-gray-700 pt-1">${item.price}</p>
												</div>
												<div className="flex flex-col items-end">
													<div className="flex items-center gap-2">
														<button
															className="p-1 text-red-500 transition-all  duration-300 ease-in-out active:scale-90 hover:scale-110 hover:cursor-pointer"
															onClick={() => removeItemFromCart(item)}
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-5 w-5"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fillRule="evenodd"
																	d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
																	clipRule="evenodd"
																/>
															</svg>
														</button>
														<span className="w-6 text-center text-lg">
															{item.quantity}
														</span>
														<button
															className="p-1 text-green-600 transition-all duration-300 ease-in-out active:scale-90 hover:scale-110 hover:cursor-pointer"
															onClick={() => addToCart(item)}
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-5 w-5"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fillRule="evenodd"
																	d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
																	clipRule="evenodd"
																/>
															</svg>
														</button>
													</div>
													<p className="text-lg font-medium mt-1 mr-3">
														${(item.price * item.quantity).toFixed(2)}
													</p>
												</div>
											</div>
										))}
									</div>
								</>
							)}
						</div>

						{/* Footer */}
						{cart.length > 0 && (
							<div className="border-t border-gray-200 p-6">
								<div className="flex justify-between items-center mb-4">
									<span className="text-gray-600 font-bold text-xl">
										Subtotal
									</span>
									<span className="font-bold text-xl">
										$
										{cart
											.reduce(
												(total, item) => total + item.price * item.quantity,
												0
											)
											.toFixed(2)}
									</span>
								</div>
								<div className="flex flex-col sm:flex-row gap-3">
									<button
										className="px-4 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors flex-1"
										onClick={handleClearCart}
									>
										Clear Cart
									</button>
									<NavLink
										to="/checkout"
										className="px-4 py-3 bg-[#AD343E] text-white rounded-lg hover:bg-[#8c2b34] transition-colors flex-1 text-center duration-300 ease-in-out"
										onClick={onClose}
									>
										Checkout
									</NavLink>
								</div>
							</div>
						)}
					</motion.aside>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CartSidebar;
