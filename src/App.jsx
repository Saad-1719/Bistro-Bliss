import React,{useContext, useState} from "react";
import Menu from "./components/Menu";
import Wrapper from "./components/Wrapper";
import { cartContext} from "./context/CartContext";
import Modal from "./components/Modal";
import UserFrom from "./components/UserFrom";
import MainPage from "./home/MainPage";
import Header from "./components/Header";

const App = () =>
{
	const { cart } = useContext(cartContext);
	const [showModal, setShowModal] = useState(false);
	const [showUserForm, setShowUserForm] = useState(true);
	const toggleModal = () => {
		setShowModal(prevState=> !prevState);
	};
	const toggleUserForm = () => {
		setShowUserForm(prevState=> !prevState);
	};
	return (
		<>

			<Header />
			
			<MainPage/>
			{/* <div className="flex items-center justify-between">
				<h1 className="text-4xl text-center pt-4 text-yellow-400 font-extrabold flex-1">
					Crispy Buns
				</h1>
				<button className="text-lg text-center mt-4  px-6 py-2 rounded-xl bg-yellow-400 text-black hover:cursor-pointer" onClick={toggleModal}>
					🛒Cart {cart.length}
				</button>
			</div>
			<Menu />
			{showModal && <Modal onClose={toggleModal} />}
			{showUserForm && <UserFrom onClose={toggleUserForm} />} */}
			
		</>
	);
};

export default App;
