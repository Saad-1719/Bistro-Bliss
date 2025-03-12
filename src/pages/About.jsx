import React from "react";
import Wrapper from "../components/Wrapper";
import AboutSection from "../components/AboutSection";
import CustomerReviews from "../components/CustomerReviews";

const About = () => {
  return (
    <section>
      <AboutSection
        className="bg-[#F9F9F7]"
        showButton={false}
        imgUrl={"src/assets/food_img.png"}
      />
      <Wrapper>
        <section className="py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-5 px-4">
          {/* card 01 */}
          <div className="flex space-x-3 w-full md:w-auto">
            <span>
			<svg
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M38 46L6 43V5L38 2V46Z"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M44 6V42"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M13 29H29"
									stroke="#AD343E"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M13 36L29 37"
									stroke="#AD343E"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M21 22C24.3137 22 27 19.3137 27 16C27 12.6863 24.3137 10 21 10C17.6863 10 15 12.6863 15 16C15 19.3137 17.6863 22 21 22Z"
									stroke="#AD343E"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
            </span>
            <span>
              <h2 className="text-lg sm:text-xl font-bold">Multi Cuisine</h2>
              <p className="text-sm sm:text-base">
                In the new era of technology we look in the future with certainty life.
              </p>
            </span>
          </div>
          {/* card 02 */}
          <div className="flex space-x-3 w-full md:w-auto">
            <span>
			<svg
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M38 22H10V38H38V22Z"
									stroke="#AD343E"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M31 28H17"
									stroke="#AD343E"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M29 12C30.1046 12 31 11.1046 31 10C31 8.89543 30.1046 8 29 8C27.8954 8 27 8.89543 27 10C27 11.1046 27.8954 12 29 12Z"
									fill="#474747"
								/>
								<path
									d="M37 12C38.1046 12 39 11.1046 39 10C39 8.89543 38.1046 8 37 8C35.8954 8 35 8.89543 35 10C35 11.1046 35.8954 12 37 12Z"
									fill="#474747"
								/>
								<path
									d="M40 4H8C5.79086 4 4 5.79086 4 8V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V8C44 5.79086 42.2091 4 40 4Z"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10 10H16"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M4 16H44"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
            </span>
            <span>
              <h2 className="text-lg sm:text-xl font-bold">Easy To Order</h2>
              <p className="text-sm sm:text-base">
                In the new era of technology we look in the future with certainty life.
              </p>
            </span>
          </div>
          {/* card 03 */}
          <div className="flex space-x-3 w-full md:w-auto">
            <span>
			<svg
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M42 28V46H6V28"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M17 2H31"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M24 28L32.5 19.5"
									stroke="#AD343E"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M24 2V5"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M24 46C33.9411 46 42 37.9411 42 28C42 18.0589 33.9411 10 24 10C14.0589 10 6 18.0589 6 28C6 37.9411 14.0589 46 24 46Z"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M24 16V18"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M36 28H34"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M32.485 36.485L31.071 35.071"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M24 40V38"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M15.5149 36.485L16.9289 35.071"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 28H14"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M15.5149 19.515L16.9289 20.929"
									stroke="#474747"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
            </span>
            <span>
              <h2 className="text-lg sm:text-xl font-bold">Fast Delivery</h2>
              <p className="text-sm sm:text-base">
                In the new era of technology we look in the future with certainty life.
              </p>
            </span>
          </div>
        </section>
      </Wrapper>

      <section className="bg-[#F9F9F7] py-12 sm:py-16 md:py-24">
        <Wrapper className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16 px-4">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl headline mb-4 sm:mb-6">
              A little information for our valuable guest
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-10">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable event.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-white rounded-2xl border border-[#DBDFD0] p-6 sm:p-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl headline">3</h1>
                <p className="text-base sm:text-lg">Locations</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#DBDFD0] p-6 sm:p-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl headline">1995</h1>
                <p className="text-base sm:text-lg">Founded</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#DBDFD0] p-6 sm:p-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl headline">65+</h1>
                <p className="text-base sm:text-lg">Staff Members</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#DBDFD0] p-6 sm:p-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl headline">100%</h1>
                <p className="text-base sm:text-lg">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img 
              src="src/assets/about_page_img.png" 
              alt="" 
              className="w-full max-w-[800px] h-auto"
            />
          </div>
        </Wrapper>
      </section>
      <CustomerReviews />
    </section>
  );
};

export default About;