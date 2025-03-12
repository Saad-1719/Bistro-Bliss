import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Wrapper from "./Wrapper";
import { cartContext } from "../context/CartContext";

const Header = () => {
	const location = useLocation();
	const { cart } = useContext(cartContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About" },
		{ to: "/contact", label: "Contact" },
	];

	return (
		<Wrapper>
			<header className="flex justify-between items-center h-14 px-3 py-2">
				{/* Logo */}
				<ul>
					<li className="flex space-x-4 items-center">
						<svg
							width="40"
							height="40"
							viewBox="0 0 57 55"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* Your SVG Logo */}
						</svg>
						<span className="text-4xl font-semibold text-[#474747] logo">
							Bistro Bliss
						</span>
					</li>
				</ul>

				{/* Hamburger Menu Button (visible on mobile) */}
				<button
					className="md:hidden z-20"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>

				{/* Navigation Links */}
				<nav
					className={`${
						isMenuOpen ? "flex z-20" : "hidden"
					} md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-4 items-center justify-center text-[#2C2F24] transition-all duration-300 ease-in-out`}
				>
					{navItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={`text-base px-3 py-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-[#AD343e]/90 hover:text-white active:scale-90 w-full md:w-auto text-center ${
								location.pathname === item.to ? "bg-[#AD343E] text-white" : ""
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							{item.label}
						</NavLink>
					))}
					{/* mobile view navlink */}
					<NavLink
						to="/menu"
						className={`md:hidden  text-base px-3 py-2 rounded-4xl transition-all duration-300 ease-in-out border border-[#AD343e] hover:bg-[#AD343e]/90 hover:text-white active:scale-90 w-full md:w-auto text-center ${
							location.pathname === "/menu" ? "bg-[#AD343E] text-white" : ""
						}`}
					>
						Menu
					</NavLink>
				</nav>

				{/* desktop view nav link */}
				<ul className="hidden md:flex space-x-4 items-center justify-center">
					<NavLink
						to="/menu"
						className={`text-base px-3 py-2 rounded-4xl transition-all duration-300 ease-in-out border border-[#AD343e] hover:bg-[#AD343e]/90 hover:text-white active:scale-90 w-full md:w-auto text-center ${
							location.pathname === "/menu" ? "bg-[#AD343E] text-white" : ""
						}`}
					>
						Menu
					</NavLink>
				</ul>

				<NavLink
					to="/cart"
					className={({ isActive }) =>
						`fixed bottom-8 right-24 border border-[#AD343E] p-3 rounded-full shadow-lg hover:bg-[#AD343e]/90 transition-all duration-300 ease-in-out z-20 flex items-center justify-center ${
							isActive ? "bg-[#AD343E] text-white" : "bg-white text-[#AD343E]"
						}`
					}
				>
					<span className="absolute -top-2 -right-2 bg-white text-[#AD343E] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
						{cart.length}
					</span>
					🛒
				</NavLink>
			</header>
		</Wrapper>
	);
};

export default Header;
