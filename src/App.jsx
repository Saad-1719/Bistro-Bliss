import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import ProtectedCheckout from "./pages/ProtectedCheckout";
import NotFound from "./components/NotFound";
import CartSidebar from "./components/CartSidebar";

const App = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	return (
		<>
			<Header onCartClick={() => setIsCartOpen(true)} />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/contact" element={<ContactUs />} />
				{/* <Route path="/cart" element={<CartPage />} /> */}
				<Route path="/checkout" element={<ProtectedCheckout />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
			<Footer />
		</>
	);
};

export default App;
