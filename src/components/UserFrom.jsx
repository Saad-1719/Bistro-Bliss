import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";

const UserFrom = ({ onClose }) => {
	const dialogRef = useRef(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});

	// Open dialog on mount and manage body overflow
	useEffect(() => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
		}
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	// Handle input changes and validate if field is touched
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

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const formIsValid = validateForm();
		if (formIsValid) {
			console.log("Form submitted:", formData);
			if (onClose) onClose();
		}
	};

	// Handle blur event to mark field as touched and validate
	const handleBlur = (e) => {
		const { name, value } = e.target;
		setTouched((prev) => ({
			...prev,
			[name]: true,
		}));
		validateField(name, value);
	};

	// Validate individual field
	const validateField = (name, value) => {
		switch (name) {
			case "name":
				if (value.length < 3) {
					setErrors((prev) => ({
						...prev,
						[name]: "Name must be at least 3 characters long",
					}));
					return false;
				} else {
					setErrors((prev) => ({
						...prev,
						[name]: "",
					}));
					return true;
				}
			case "email":
				if (!value.includes("@")) {
					setErrors((prev) => ({
						...prev,
						[name]: "Invalid email address",
					}));
					return false;
				} else {
					setErrors((prev) => ({
						...prev,
						[name]: "",
					}));
					return true;
				}
			case "phone":
				if (value.length !== 11) {
					setErrors((prev) => ({
						...prev,
						[name]: "Phone number must be 11 digits long",
					}));
					return false;
				} else {
					setErrors((prev) => ({
						...prev,
						[name]: "",
					}));
					return true;
				}
			default:
				return true;
		}
	};

	// Validate entire form
	const validateForm = () => {
		const allTouched = Object.keys(formData).reduce((acc, field) => {
			acc[field] = true;
			return acc;
		}, {});
		setTouched(allTouched);

		let isValid = true;
		Object.entries(formData).forEach(([name, value]) => {
			const fieldValid = validateField(name, value);
			if (!fieldValid) isValid = false;
		});
		return isValid;
	};
	console.log(formData);
	// Check if form is valid for enabling/disabling submit button
	const getFormValidity = () => {
		return (
			formData.name.length >= 3 &&
			formData.email.includes("@") &&
			formData.phone.length === 11
		);
	};

	return (
		<dialog
			ref={dialogRef}
			className="text-white p-6 rounded-2xl w-full max-w-lg bg-black/90 mx-auto fixed inset-0 m-auto h-fit"
		>
			<h2 className="text-2xl font-bold text-yellow-400 mb-4">
				User Information
			</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<Input
						name="name"
						label="Name"
						id="name"
						className="bg-gray-800 text-white p-2 rounded w-full"
						value={formData.name}
						onChange={handleChange}
						onBlur={handleBlur}
						required
					/>
					{touched.name && errors.name && (
						<p className="text-red-500">{errors.name}</p>
					)}
				</div>
				<div className="mb-4">
					<Input
						name="email"
						label="Email"
						id="email"
						type="email"
						className="bg-gray-800 text-white p-2 rounded w-full"
						value={formData.email}
						onChange={handleChange}
						onBlur={handleBlur}
						required
					/>
					{touched.email && errors.email && (
						<p className="text-red-500">{errors.email}</p>
					)}
				</div>
				<div className="mb-4">
					<Input
						name="phone"
						label="Phone"
						id="phone"
						className="bg-gray-800 text-white p-2 rounded w-full"
						value={formData.phone}
						onChange={handleChange}
						onBlur={handleBlur}
						required
					/>
					{touched.phone && errors.phone && (
						<p className="text-red-500">{errors.phone}</p>
					)}
				</div>
				<div className="flex justify-end space-x-2 mt-6">
					<button
						type="button"
						className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						type="submit"
						className={`bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ${
							!getFormValidity() ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={!getFormValidity()}
					>
						Submit
					</button>
				</div>
			</form>
		</dialog>
	);
};

export default UserFrom;
