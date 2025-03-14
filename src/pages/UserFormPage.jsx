import React, { useState, useContext, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Input from "../components/Input";
import { cartContext } from "../context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const UserFormPage = () => {
	useEffect(() => {
		return () => sessionStorage.removeItem("orderPlaced"); // ✅ Clear on unmount
  }, []);
  
	const { cart, clearCart } = useContext(cartContext);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		street: "",
		"postal-code": "",
		city: "",
		paymentMethod: "cod",
	});
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [orderSuccess, setOrderSuccess] = useState(false);
	const [orderError, setOrderError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		if (touched[name]) {
			validateField(name, value);
		}
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		setTouched((prev) => ({
			...prev,
			[name]: true,
		}));
		validateField(name, value);
	};

	const validateField = (name, value) => {
		switch (name) {
			case "name":
				setErrors((prev) => ({
					...prev,
					[name]:
						value.length < 3 ? "Name must be at least 3 characters long" : "",
				}));
				return value.length >= 3;
			case "email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				setErrors((prev) => ({
					...prev,
					[name]: !emailRegex.test(value)
						? "Please enter a valid email address"
						: "",
				}));
				return emailRegex.test(value);
			case "phone":
				setErrors((prev) => ({
					...prev,
					[name]:
						value.length !== 11 ? "Phone number must be 11 digits long" : "",
				}));
				return value.length === 11;
			default:
				return true;
		}
	};

	const validateForm = () => {
		setTouched({ name: true, email: true, phone: true });
		return ["name", "email", "phone"].every((field) =>
			validateField(field, formData[field])
		);
	};

	const getFormValidity = () => {
		return (
			formData.name.length >= 3 &&
			formData.email.includes("@") &&
			formData.phone.length === 11
		);
	};

	const submitOrder = async () => {
		setIsSubmitting(true);
		try {
			const response = await fetch("http://localhost:3000/orders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					order: {
						customer: {
							name: formData.name,
							email: formData.email,
							phone: formData.phone,
							street: formData.street,
							"postal-code": formData["postal-code"],
							city: formData.city,
						},
						items: cart,
						paymentMethod: formData.paymentMethod,
					},
				}),
			});

			if (response.ok) {
				// Add toast notification before navigation
				toast.success("Order Placed Successfully 🎉🎉", {
					duration: 3000,
					style: {
						background: "#018749",
						color: "#ffff",
						fontWeight: "semibold",
						padding: "10px",
						borderRadius: "8px",
					},
				});
				sessionStorage.setItem("orderPlaced", "true"); // ✅ Store order success
				setOrderSuccess(true);
				// Small delay to show toast before navigating
				setTimeout(() => {
					clearCart();
				}, 3000);
			} else {
				const errorData = await response.json();
				setOrderError(
					errorData.message || "An error occurred while submitting your order."
				);
				toast.error("Failed to place order", {
					duration: 3000,
					style: {
						background: "#D84040",
						color: "#ffff",
						fontWeight: "semibold",
						padding: "10px",
						borderRadius: "8px",
					},
				});
			}
		} catch (error) {
			setOrderError("An error occurred while submitting your order.");
			toast.error("Network Error Occured", {
				duration: 3000,
				style: {
					background: "#D84040",
					color: "#ffff",
					fontWeight: "semibold",
					padding: "10px",
					borderRadius: "8px",
				},
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formIsValid = validateForm();
		if (formIsValid) {
			submitOrder();
		}
	};

	return (
		<section className="min-h-screen bg-[linear-gradient(to_bottom,_#F9F9F7_50%,_#ffffff_50%)] sm:bg-[linear-gradient(to_bottom,_#F9F9F7_60%,_#ffffff_60%)]">
			<Toaster position="top-center" reverseOrder={false} />
			<Wrapper className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
				<div className="text-center">
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl headline">
						User Information
					</h1>
					<p className="text-base sm:text-lg max-w-2xl mx-auto mt-4">
						Please provide your details below. We use this information to
						enhance your experience with our services.
					</p>
				</div>
				<div className="max-w-4xl mx-auto mt-8 sm:mt-10">
					{orderSuccess ? (
						<div className="bg-green-50 border border-green-200 text-green-800 px-4 py-6 rounded-lg text-center">
							<h2 className="text-xl sm:text-2xl font-bold">
								Order Placed Successfully!
							</h2>
							<p className="text-base sm:text-lg mt-2">
								Thank you for your order. We'll process it soon.
							</p>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="flex flex-col w-full rounded-2xl my-6 sm:my-10 shadow-lg bg-white p-6 sm:p-8 md:p-10 space-y-6"
						>
							<div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 w-full">
								<Input
									name="name"
									type="text"
									id="name"
									label="Name"
									placeholder="Enter your name"
									divClassName="w-full"
									className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
									labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3 text-sm sm:text-base"
									value={formData.name}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>
								<Input
									name="email"
									type="email"
									id="email"
									label="Email"
									placeholder="Enter email address"
									divClassName="w-full"
									className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
									labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3 text-sm sm:text-base"
									value={formData.email}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>
							</div>
							<div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 w-full">
								<Input
									name="street"
									type="text"
									id="street"
									label="Street"
									placeholder="Enter your street"
									divClassName="w-full"
									className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
									labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3 text-sm sm:text-base"
									value={formData.street}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>
								<Input
									name="postal-code"
									type="text"
									id="postal-code"
									label="Postal Code"
									placeholder="Enter your postal code"
									divClassName="w-full"
									className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
									labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3 text-sm sm:text-base"
									value={formData["postal-code"]}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>
							</div>
							<Input
								name="city"
								type="text"
								id="city"
								label="City"
								placeholder="Enter your city"
								divClassName="w-full"
								className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
								labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3 text-sm sm:text-base"
								value={formData.city}
								onChange={handleChange}
								onBlur={handleBlur}
								required
							/>
							<Input
								name="phone"
								type="text"
								id="phone"
								label="Phone"
								placeholder="Enter your phone number"
								divClassName="w-full"
								className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
								labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3 text-sm sm:text-base"
								value={formData.phone}
								onChange={handleChange}
								onBlur={handleBlur}
								required
							/>
							<div className="w-full">
								<label className="text-[#2C2F24] font-semibold pb-2 sm:pb-3 block text-sm sm:text-base">
									Payment Method
								</label>
								<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-2">
									<div className="flex items-center">
										<input
											type="radio"
											id="cod"
											name="paymentMethod"
											value="cod"
											checked={formData.paymentMethod === "cod"}
											onChange={handleChange}
											className="mr-2 h-4 w-4 sm:h-5 sm:w-5 accent-[#AD343E]"
										/>
										<label
											htmlFor="cod"
											className="text-[#2C2F24] text-sm sm:text-base"
										>
											Cash on Delivery (COD)
										</label>
									</div>
								</div>
							</div>
							<div className="w-full space-y-2">
								{touched.name && errors.name && (
									<p className="text-[#AD343E] text-xs sm:text-sm">
										{errors.name}
									</p>
								)}
								{touched.email && errors.email && (
									<p className="text-[#AD343E] text-xs sm:text-sm">
										{errors.email}
									</p>
								)}
								{touched.phone && errors.phone && (
									<p className="text-[#AD343E] text-xs sm:text-sm">
										{errors.phone}
									</p>
								)}
								{orderError && (
									<div className="bg-red-50 border border-red-200 text-[#AD343E] px-4 py-3 rounded-lg">
										{orderError}
									</div>
								)}
							</div>
							<button
								type="submit"
								className={`text-center w-full rounded-full bg-[#AD343E] font-semibold text-white px-4 py-2 sm:py-3 text-sm sm:text-base hover:cursor-pointer active:scale-90 transition duration-300 ease-in-out hover:bg-[#ad343e]/90 ${
									isSubmitting || !getFormValidity()
										? "opacity-70 cursor-not-allowed"
										: ""
								}`}
								disabled={isSubmitting || !getFormValidity()}
							>
								{isSubmitting ? "Processing..." : "Place Order"}
							</button>
						</form>
					)}
					<div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 pt-6 sm:pt-8">
						<div className="flex-1">
							<h1 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4">
								Need Help?
							</h1>
							<p className="text-xl sm:text-2xl font-bold text-[#AD343E]">
								+1-234-567-8900
							</p>
						</div>
						<div className="flex-1">
							<h1 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4">
								Hours:
							</h1>
							<p className="text-base sm:text-lg">Mon-Fri: 9am - 6pm</p>
							<p className="text-base sm:text-lg">Sat: 10am - 4pm</p>
						</div>
						<div className="flex-1">
							<h1 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4">
								Our Address:
							</h1>
							<p className="text-base sm:text-lg">
								123 User Street, Digital Plaza, CA 98765 United States
							</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default UserFormPage;
