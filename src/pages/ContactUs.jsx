import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Input from "../components/Input";
import { toast,Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

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

  

  const submitMessage = async () =>
  {
    setSubmitting(true);
    try {
      const response = await fetch("https://bristo-bliss-backend-hosting-env.eba-z4tdcyhg.eu-north-1.elasticbeanstalk.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        toast.error("Failed to send message", {
					duration: 3000,
					style: {
						background: "#D84040",
						color: "#ffff",
						fontWeight: "semibold",
						padding: "10px",
						borderRadius: "8px",
					},
				});
        const errorData = await response.json();
        throw new Error(errorData.message);
        
      }
      else {
        setFormData({ Name: "", Email: "", Subject: "", Message: "" });
        setTouched({});
        toast.success("Message Sent Successfully", {
					duration: 3000,
					style: {
						background: "#018749",
						color: "#ffff",
						fontWeight: "semibold",
						padding: "10px",
						borderRadius: "8px",
					},
				});
      }
    } catch (error) {
      console.error(error);
      
    }
    finally {
      setSubmitting(false);
    }
  }

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
      case "Name":
        setErrors((prev) => ({
          ...prev,
          [name]: value.length < 2 ? "Name must be at least 2 characters long" : "",
        }));
        return value.length >= 2;
      case "Email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prev) => ({
          ...prev,
          [name]: !emailRegex.test(value) ? "Please enter a valid email address" : "",
        }));
        return emailRegex.test(value);
      case "Subject":
        setErrors((prev) => ({
          ...prev,
          [name]: value.length < 5 ? "Subject must be at least 5 characters long" : "",
        }));
        return value.length >= 5;
      case "Message":
        setErrors((prev) => ({
          ...prev,
          [name]: value.length < 10 ? "Message must be at least 10 characters long" : "",
        }));
        return value.length >= 10;
      default:
        return true;
    }
  };

  const validateForm = () => {
    setTouched({ Name: true, Email: true, Subject: true, Message: true });
    return ["Name", "Email", "Subject", "Message"].every((field) => 
      validateField(field, formData[field])
    );
  };

  const getFormValidity = () => {
    return (
      formData.Name.length >= 2 && 
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email) && 
      formData.Subject.length >= 5 && 
      formData.Message.length >= 10
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid = validateForm();

    if (formIsValid) {
     submitMessage();
    }
  };

  return (
    <section className="min-h-screen bg-[linear-gradient(to_bottom,_#F9F9F7_50%,_#ffffff_50%)] sm:bg-[linear-gradient(to_bottom,_#F9F9F7_60%,_#ffffff_60%)]">
      <Wrapper className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <Toaster reverseOrder={ false} position="top-center" />
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl headline">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mt-4">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-8 sm:mt-10">
          <form 
            className="flex flex-col w-full rounded-2xl my-6 sm:my-10 shadow-lg bg-white p-6 sm:p-8 md:p-10 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 w-full">
              <div className="w-full">
                <Input
                  name="Name"
                  type="text"
                  id="Name"
                  label="Name"
                  placeholder="Enter your name"
                  divClassName="w-full"
                  className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
                  labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3"
                  value={formData.Name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.Name && errors.Name && (
                  <p className="text-[#AD343E] text-xs sm:text-sm mt-1 ml-3">{errors.Name}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  name="Email"
                  type="email"
                  id="Email"
                  label="Email"
                  divClassName="w-full"
                  required
                  placeholder="Enter email address"
                  className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
                  labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3"
                  value={formData.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.Email && errors.Email && (
                  <p className="text-[#AD343E] text-xs sm:text-sm mt-1 ml-3">{errors.Email}</p>
                )}
              </div>
            </div>
            <div className="w-full">
              <Input
                name="Subject"
                type="text"
                id="Subject"
                label="Subject"
                divClassName="w-full"
                required
                placeholder="Write a subject"
                className="rounded-full border border-[#DBDFD0] px-4 py-2 sm:py-3 w-full text-sm sm:text-base"
                labelClassName="text-[#2C2F24] font-semibold pb-2 sm:pb-3"
                value={formData.Subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.Subject && errors.Subject && (
                <p className="text-[#AD343E] text-xs sm:text-sm mt-1 ml-3">{errors.Subject}</p>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="Message" className="text-[#2C2F24] font-semibold block pb-2 sm:pb-3 text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="Message"
                id="Message"
                className="border border-[#DBDFD0] rounded-xl w-full px-4 py-2 sm:py-3 text-sm sm:text-base"
                rows="4"
                required
                placeholder="Write your message"
                value={formData.Message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.Message && errors.Message && (
                <p className="text-[#AD343E] text-xs sm:text-sm mt-1 ml-3">{errors.Message}</p>
              )}
            </div>
            <button 
              className={`text-center w-full rounded-full bg-[#AD343E] font-semibold text-white px-4 py-2 sm:py-3 text-sm sm:text-base hover:cursor-pointer active:scale-90 transition duration-300 ease-in-out hover:bg-[#ad343e]/90 ${
                !getFormValidity() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!getFormValidity()}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 pt-6 sm:pt-8">
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4">Call Us:</h1>
              <p className="text-xl sm:text-2xl font-bold text-[#AD343E]">+1-234-567-8900</p>
            </div>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4">Hours:</h1>
              <p className="text-base sm:text-lg">Mon-Fri: 11am - 8pm</p>
              <p className="text-base sm:text-lg">Sat-Sun: 9am - 10pm</p>
            </div>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4">Our Location:</h1>
              <p className="text-base sm:text-lg">
                123 Bridge Street Nowhere Land, LA 12345 United States
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactUs;