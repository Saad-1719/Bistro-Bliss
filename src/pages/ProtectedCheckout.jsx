import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import UserFormPage from "./UserFormPage";

const ProtectedCheckout = () => {
  const { cart } = useContext(cartContext);
  const orderPlaced = sessionStorage.getItem("orderPlaced");

  if (cart.length === 0) {
    
    return <Navigate to="/" replace />;
  }

  return <UserFormPage />;
};

export default ProtectedCheckout;
