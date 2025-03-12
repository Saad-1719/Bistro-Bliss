import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import UserFormPage from "./UserFormPage";

const ProtectedCheckout = () => {
  const { cart } = useContext(cartContext);

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return <UserFormPage />;
};

export default ProtectedCheckout;
