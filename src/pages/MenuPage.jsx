import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../components/Wrapper";
import { cartContext } from "../context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const MenuPage = () => {
  const { addToCart } = useContext(cartContext);
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getMenu = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("http://bristo-bliss-backend-hosting-env.eba-z4tdcyhg.eu-north-1.elasticbeanstalk.com/meals");
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

  // Get unique categories from menu items
  const categories = ["All", ...new Set(menu.map((item) => item.category))];

  // Filtered menu based on selected category
  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  return (
    <Wrapper className="py-4 sm:py-6 md:py-8 px-4">
      {/* Toaster Component */}
      <Toaster position="top-center" reverseOrder={false} />

      <section>
        <div className="text-center py-12 sm:py-16 md:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl headline">
            Our Menu
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mt-4">
            We consider all the drivers of change gives you the components you
            need to create a truly great experience.
          </p>
        </div>

        {/* Category Filter Dropdown */}
        <div className="flex overflow-x-auto space-x-2 sm:space-x-4 pb-4 mb-6 sm:mb-8 px-2 sm:px-4 no-scrollbar max-w-5xl mx-auto scrollbar-thin scrollbar-thumb-gray-700">
          {!error &&
            categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full whitespace-nowrap border-2 active:scale-90 hover:bg-[#AD343E]/90 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-white text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-[#AD343E] text-white border-[#AD343E]"
                    : "border-gray-300 text-gray-700"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {isLoading && (
            <p className="text-center text-base sm:text-lg font-bold col-span-full">
              Loading...
            </p>
          )}
          {error && (
            <p className="text-center text-red-500 text-base sm:text-2xl col-span-full">
              {error}
            </p>
          )}
          {filteredMenu.map((item) => (
            <div
              className="rounded-2xl border border-[#DBDFD0] text-black overflow-hidden shadow-lg flex flex-col h-full"
              key={item.id}
            >
              <img
                src={`http://bristo-bliss-backend-hosting-env.eba-z4tdcyhg.eu-north-1.elasticbeanstalk.com/${item.image}`}
                alt={item.name}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-2xl"
              />
              <div className="px-3 sm:px-4 py-4 sm:py-5 text-center space-y-3 flex flex-col flex-grow">
                <h2 className="font-bold px-3 sm:px-4 py-2 text-lg sm:text-xl md:text-2xl text-[#AD343E] w-fit mx-auto">
                  ${item.price}
                </h2>
                <h2 className="font-bold text-lg sm:text-xl text-black">
                  {item.name}
                </h2>
                <p className="font-light px-3 sm:px-4 py-2 text-[#414536] text-sm sm:text-base flex-grow">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <button
                    className="border border-[#AD343E] hover:bg-[#AD343E] hover:text-white transition-all duration-300 ease-in-out font-bold px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base text-black rounded-xl hover:cursor-pointer active:scale-90"
                    onClick={() => {
                      addToCart(item);
                      toast.success(`${item.name} added to cart! 🛒`, {
                        duration: 3000,
                        style: {
                          background: "#018749",
                          color: "#ffff",
                          fontWeight: "semibold",
                          padding: "10px",
                          borderRadius: "8px",
                        },
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default MenuPage;
