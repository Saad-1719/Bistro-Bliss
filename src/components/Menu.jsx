import React, { useState, useEffect,useContext } from "react";
import Wrapper from "./Wrapper";
import { cartContext } from "../context/CartContext";
const Menu = () =>
{
	const {addToCart} = useContext(cartContext);
	const [menu, setMenu] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null);

	useEffect(() => {
		const getMenu = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const response = await fetch("http://localhost:3000/meals");
				if (!response.ok) {
					throw new Error("Failed to fetch menu items");
				}
				const data = await response.json();
				setMenu(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		getMenu();
	}, []);

	return (
		<Wrapper className="py-8">
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
				{isLoading && (
					<p className="text-center text-lg font-bold">Loading...</p>
				)}
				{error && <p className="text-center text-red-500">{error}</p>}
				{menu.map((item) => (
					<div
						className="rounded-2xl bg-black/50 overflow-hidden shadow-lg flex flex-col h-full"
						key={item.id}
					>
						<img
							src={`http://localhost:3000/${item.image}`}
							alt={item.name}
							className="w-full h-56 object-cover rounded-t-2xl"
						/>
						<div className="px-4 py-5 text-center space-y-3 flex flex-col flex-grow">
							<h2 className="font-bold text-2xl text-white">{item.name}</h2>
							<p className="bg-yellow-900/50 font-bold px-4 py-2 rounded-xl text-white w-fit mx-auto">
								${item.price}
							</p>
							<p className="font-light px-4 py-2 text-gray-300 flex-grow">
								{item.description}
							</p>
							<div className="mt-auto">
								<button className="bg-yellow-600 hover:bg-yellow-500 transition px-4 py-2 text-black rounded-xl font-medium  hover:cursor-pointer" onClick={() => addToCart(item)}>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				))}
      </section>

		</Wrapper>
	);
};

export default Menu;
