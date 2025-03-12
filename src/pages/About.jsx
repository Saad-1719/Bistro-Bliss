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
				<section className="py-24 flex items-center justify-center flex-row space-x-5">
					{/* card 01 */}
					<div className="flex space-x-3">
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
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M44 6V42"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13 29H29"
									stroke="#AD343E"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13 36L29 37"
									stroke="#AD343E"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M21 22C24.3137 22 27 19.3137 27 16C27 12.6863 24.3137 10 21 10C17.6863 10 15 12.6863 15 16C15 19.3137 17.6863 22 21 22Z"
									stroke="#AD343E"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span>
							<h2 className="text-xl font-bold">Multi Cuisine</h2>
							<p>
								In the new era of technology we look in the future with
								certainty life.
							</p>
						</span>
					</div>
					{/* card 02 */}
					<div className="flex space-x-3">
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
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M31 28H17"
									stroke="#AD343E"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
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
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10 10H16"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4 16H44"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span>
							<h2 className="text-xl font-bold">Easy To Order</h2>
							<p>
								In the new era of technology we look in the future with
								certainty life.
							</p>
						</span>
					</div>
					{/* card 03 */}
					<div className="flex space-x-3">
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
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M17 2H31"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M24 28L32.5 19.5"
									stroke="#AD343E"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M24 2V5"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M24 46C33.9411 46 42 37.9411 42 28C42 18.0589 33.9411 10 24 10C14.0589 10 6 18.0589 6 28C6 37.9411 14.0589 46 24 46Z"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M24 16V18"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M36 28H34"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M32.485 36.485L31.071 35.071"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M24 40V38"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M15.5149 36.485L16.9289 35.071"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12 28H14"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M15.5149 19.515L16.9289 20.929"
									stroke="#474747"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span>
							<h2 className="text-xl font-bold">Fast Delivery</h2>
							<p>
								In the new era of technology we look in the future with
								certainty life.
							</p>
						</span>
					</div>
				</section>
			</Wrapper>

			<section className="bg-[#F9F9F7] py-24">
				<Wrapper className="flex items-center justify-between gap-16">
					<div>
						<h1 className="text-6xl headline">
							A little information for our valuable guest
						</h1>
						<p>
							At place, we believe that dining is not just about food, but also
							about the overall experience. Our staff, renowned for their warmth
							and dedication, strives to make every visit an unforgettable
							event.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
							<div className="bg-white rounded-2xl border border-[#DBDFD0] p-8 text-center">
								<h1 className="text-6xl headline">3</h1>
								<p className="text-lg">Locations</p>
							</div>
							<div className="bg-white rounded-2xl border border-[#DBDFD0] p-8 text-center">
								<h1 className="text-6xl headline">1995</h1>
								<p className="text-lg">Founded</p>
							</div>
							<div className="bg-white rounded-2xl border border-[#DBDFD0] p-8 text-center">
								<h1 className="text-6xl headline">65+</h1>
								<p className="text-lg">Staff Members</p>
							</div>
							<div className="bg-white rounded-2xl border border-[#DBDFD0] p-8 text-center">
								<h1 className="text-6xl headline">100%</h1>
								<p className="text-lg">Satisfied Customers</p>
							</div>
						</div>
          </div>
          <div>
            <img src="src/assets/about_page_img.png" alt="" className="w-[800px]"/>
          </div>
				</Wrapper>
			</section>
			<CustomerReviews />
		</section>
	);
};

export default About;
