import React from "react";
import Wrapper from "../components/Wrapper";
import AboutSection from "../components/AboutSection";
import CustomerReviews from "../components/CustomerReviews";
const MainPage = () => {
	return (
		<section className=''>
			{/* hero section */}
			<div className=" bg-[url('/hero-img.png')] bg-center object-cover h-[calc(100lvh-56px)]  mx-auto flex flex-col items-center justify-center text-center space-y-4">
				<h1 className="text-8xl headline">Best food for your taste</h1>
				<p className="text-lg max-w-lg mx-auto">
					Discover delectable cuisine and unforgettable moments in our
					welcoming, culinary haven.{" "}
				</p>
				<button className="bg-[#AD343E] text-white px-6 py-3 rounded-4xl text-xl mt-2">
					Place Order
				</button>
			</div>
			{/* menu section */}
			<Wrapper>
				<div className="py-16">
					<h1 className="text-center text-6xl pb-8 headline">
						Browse Our Menu
					</h1>
					<div className="grid grid-cols-4 gap-4">
						{/* card 01 */}
						<article className="border rounded-2xl px-6 py-6 flex flex-col items-center justify-center text-center space-y-4 ">
							<span className="p-4 border rounded-full bg-[#efefef]">
								<svg
									width="50"
									height="50"
									viewBox="0 0 48 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_0_1215)">
										<path
											d="M20 3V10"
											stroke="#474747"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M10 5V12"
											stroke="#474747"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M30 5V12"
											stroke="#474747"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M37 23H45V31C45 33.209 43.209 35 41 35H37"
											stroke="#474747"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M25 47H15C8.373 47 3 41.627 3 35V19H37V35C37 41.627 31.627 47 25 47Z"
											stroke="#474747"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M28 27H18V37H28V27Z"
											stroke="#474747"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M23 19V27"
											stroke="#474747"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_0_1215">
											<rect width="48" height="50" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</span>

							<h2 className="text-2xl font-bold text-black">Breakfast</h2>
							<p>
								In the new era of technology we look in the future with
								certainty and pride for our life.
							</p>
							<button className="text-base font-bold text-[var(--button-color)] ">
								Explore Menu
							</button>
						</article>
						{/* card 02 */}
						<article className="border rounded-2xl px-6 py-6 flex flex-col items-center justify-center text-center space-y-4 ">
							<span className="p-4 border rounded-full bg-[#efefef]">
								<svg
									width="50"
									height="50"
									viewBox="0 0 53 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.1414 43.8498V47.3717C13.1414 48.0688 13.4183 48.7373 13.9112 49.2302C14.4041 49.7231 15.0726 50 15.7697 50H36.796C37.4931 50 38.1616 49.7231 38.6545 49.2302C39.1474 48.7373 39.4243 48.0688 39.4243 47.3717V43.8498C43.4197 41.5431 46.7375 38.2253 49.0443 34.2299C51.3511 30.2345 52.5656 25.7024 52.5657 21.0889C52.5657 20.3918 52.2888 19.7233 51.7959 19.2304C51.303 18.7375 50.6345 18.4606 49.9374 18.4606C49.8893 16.8514 49.429 15.2814 48.6007 13.9009C47.7724 12.5204 46.6038 11.3755 45.2065 10.5757C44.8715 8.28633 43.7224 6.19441 41.9701 4.68345C40.2178 3.1725 37.9796 2.34377 35.6658 2.3492C34.7786 2.34767 33.8949 2.46254 33.0375 2.69087C31.2285 0.963709 28.8235 0 26.3223 0C23.8211 0 21.4161 0.963709 19.607 2.69087C18.7496 2.46254 17.866 2.34767 16.9787 2.3492C14.6559 2.33107 12.405 3.15405 10.6417 4.66615C8.87839 6.17825 7.72178 8.27733 7.38548 10.5757C5.98333 11.3722 4.80941 12.5157 3.97637 13.8964C3.14332 15.2771 2.67911 16.8488 2.62828 18.4606C1.93122 18.4606 1.26271 18.7375 0.769807 19.2304C0.276908 19.7233 0 20.3918 0 21.0889C0.000117201 25.7024 1.21461 30.2345 3.5214 34.2299C5.8282 38.2253 9.14602 41.5431 13.1414 43.8498ZM10.8023 14.9387L12.9837 14.2553L12.5632 11.8899C12.5701 11.3238 12.6884 10.7646 12.9113 10.2443C13.1343 9.72397 13.4576 9.25265 13.8628 8.85727C14.2679 8.46188 14.747 8.15018 15.2726 7.93995C15.7982 7.72973 16.3601 7.6251 16.9262 7.63205C17.6852 7.6277 18.4339 7.80811 19.1076 8.15771L21.2365 9.34043L22.5507 7.31666C22.9617 6.7041 23.5171 6.20212 24.168 5.85501C24.8189 5.50791 25.5452 5.32634 26.2828 5.32634C27.0205 5.32634 27.7468 5.50791 28.3977 5.85501C29.0486 6.20212 29.604 6.7041 30.015 7.31666L31.3292 9.34043L33.4581 8.15771C34.1318 7.80811 34.8805 7.6277 35.6395 7.63205C36.7764 7.61775 37.8733 8.05044 38.6942 8.83696C39.5152 9.62348 39.9944 10.7009 40.0288 11.8373L39.6083 14.0713L41.7634 14.8073C42.5585 15.0561 43.261 15.5368 43.7808 16.1878C44.3007 16.8387 44.6141 17.6302 44.6808 18.4606H7.88485C7.95162 17.6302 8.26503 16.8387 8.78487 16.1878C9.3047 15.5368 10.0072 15.0561 10.8023 14.8073V14.9387ZM47.1514 23.7172C46.7129 27.1582 45.4299 30.4372 43.4167 33.2621C41.4036 36.087 38.7228 38.3699 35.6133 39.9074C35.1758 40.1278 34.8087 40.4661 34.5533 40.884C34.2978 41.302 34.1643 41.783 34.1677 42.2728V44.7434H18.398V42.2728C18.4014 41.783 18.2679 41.302 18.0124 40.884C17.757 40.4661 17.3899 40.1278 16.9524 39.9074C13.8429 38.3699 11.1621 36.087 9.14895 33.2621C7.13577 30.4372 5.85276 27.1582 5.41427 23.7172H47.1514Z"
										fill="#474747"
									/>
								</svg>
							</span>

							<h2 className="text-2xl font-bold text-black">Main Dishes</h2>
							<p>
								In the new era of technology we look in the future with
								certainty and pride for our life.
							</p>
							<button className="text-base font-bold text-[var(--button-color)] ">
								Explore Menu
							</button>
						</article>
						{/* card 03 */}
						<article className="border rounded-2xl px-6 py-6 flex flex-col items-center justify-center text-center space-y-4 ">
							<span className="p-4 border rounded-full bg-[#efefef]">
								<svg
									width="50"
									height="50"
									viewBox="0 0 40 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M34.4153 1.17023e-08C35.1182 0.000303338 35.813 0.148777 36.4546 0.435735C37.0962 0.722693 37.6701 1.14169 38.1388 1.66539C38.6076 2.18909 38.9606 2.80572 39.175 3.47507C39.3893 4.14442 39.4602 4.85143 39.3828 5.55L34.9403 45.55C34.8049 46.7734 34.223 47.9039 33.306 48.725C32.3889 49.5461 31.2013 50.0001 29.9703 50H9.44534C8.21443 50.0001 7.02675 49.5461 6.10971 48.725C5.19268 47.9039 4.61074 46.7734 4.47534 45.55L0.0303426 5.55C-0.0469921 4.85122 0.0239051 4.14399 0.238407 3.47447C0.452909 2.80495 0.806192 2.1882 1.2752 1.66446C1.7442 1.14072 2.31839 0.721774 2.96027 0.43497C3.60215 0.148167 4.2973 -4.80856e-05 5.00034 1.17023e-08H34.4153ZM34.4153 5H5.00034L6.06284 14.5575C6.96037 14.3865 7.86815 14.2746 8.78034 14.2225C11.7778 14.0475 15.9203 14.4075 20.6928 16.4525C24.6703 18.1575 28.0278 18.4225 30.3428 18.285C31.2313 18.2378 32.1139 18.1123 32.9803 17.91L34.4153 5ZM32.4028 23.1C31.8728 23.175 31.2803 23.24 30.6353 23.275C27.6378 23.4525 23.4953 23.0925 18.7228 21.05C14.7453 19.3425 11.3878 19.0775 9.07284 19.215C8.24684 19.2605 7.42585 19.3726 6.61784 19.55L9.44534 45H29.9703L32.4028 23.1ZM17.2078 27.5C17.2078 28.163 16.9444 28.7989 16.4756 29.2678C16.0068 29.7366 15.3709 30 14.7078 30C14.0448 30 13.4089 29.7366 12.9401 29.2678C12.4712 28.7989 12.2078 28.163 12.2078 27.5C12.2078 26.837 12.4712 26.2011 12.9401 25.7322C13.4089 25.2634 14.0448 25 14.7078 25C15.3709 25 16.0068 25.2634 16.4756 25.7322C16.9444 26.2011 17.2078 26.837 17.2078 27.5ZM22.2078 37.5C22.8709 37.5 23.5068 37.2366 23.9756 36.7678C24.4444 36.2989 24.7078 35.663 24.7078 35C24.7078 34.337 24.4444 33.7011 23.9756 33.2322C23.5068 32.7634 22.8709 32.5 22.2078 32.5C21.5448 32.5 20.9089 32.7634 20.4401 33.2322C19.9712 33.7011 19.7078 34.337 19.7078 35C19.7078 35.663 19.9712 36.2989 20.4401 36.7678C20.9089 37.2366 21.5448 37.5 22.2078 37.5Z"
										fill="#474747"
									/>
								</svg>
							</span>

							<h2 className="text-2xl font-bold text-black">Drinks</h2>
							<p>
								In the new era of technology we look in the future with
								certainty and pride for our life.
							</p>
							<button className="text-base font-bold text-[var(--button-color)] ">
								Explore Menu
							</button>
						</article>
						{/* card 04 */}
						<article className="border rounded-2xl px-6 py-6 flex flex-col items-center justify-center text-center space-y-4 ">
							<span className="p-4 border rounded-full bg-[#efefef]">
								<svg
									width="50"
									height="50"
									viewBox="0 0 51 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M27.9715 7.37707L27.9296 7.24794L28.1426 7.52297C28.3254 7.72757 28.4763 7.68229 28.6054 7.52297C28.6054 7.52297 29.7341 6.22662 28.8503 4.7173C28.3639 3.71779 26.4454 1.33976 25.4358 0.595154C23.6112 -0.563674 22.434 0.326829 22.434 0.326829C22.2881 0.435836 22.1807 0.595154 22.2881 0.742733L22.5732 1.03621C19.1302 1.72547 18.6237 4.40705 18.399 5.59438L18.3621 5.7906L17.8993 9.0105C17.7517 10.1341 18.3621 10.7429 19.4354 10.7429H22.9371C24.1579 10.7596 26.7003 10.7915 27.9715 7.37707Z"
										fill="#474747"
									/>
									<path
										d="M16.7049 5.55247L16.3309 8.15523L4.47767 19.1197C4.0278 19.4953 3.69155 19.989 3.50667 20.5451C3.43528 20.7527 3.38417 20.9667 3.35406 21.1841V22.0394C3.80854 22.0763 4.33345 22.0394 4.90532 21.9119L42.4104 11.1521C42.5352 11.1163 42.6666 11.1099 42.7942 11.1335C42.9218 11.157 43.0423 11.2099 43.146 11.288C43.2497 11.366 43.3339 11.4671 43.3919 11.5832C43.4499 11.6993 43.4802 11.8273 43.4804 11.9571V20.0839C43.4812 20.2639 43.4239 20.4394 43.3169 20.5841C43.2099 20.7289 43.059 20.8352 42.8867 20.8872C35.709 23.0506 7.17434 31.6488 6.47334 31.8383C5.6801 32.0563 3.92425 32.385 3.35406 32.3112V37.5687C3.86556 37.6391 4.39717 37.619 4.90532 37.4831L42.4088 26.6244C42.5336 26.5882 42.6652 26.5816 42.793 26.6051C42.9209 26.6285 43.0415 26.6813 43.1455 26.7594C43.2494 26.8375 43.3338 26.9386 43.3919 27.0549C43.45 27.1712 43.4803 27.2994 43.4804 27.4293V35.2309L44.7449 34.8687L44.7566 34.8653L44.827 34.8418C45.2376 34.7066 45.6328 34.5284 46.006 34.3102C46.7657 33.8574 46.8344 33.5505 46.8344 33.5119V11.6703C46.8344 11.3047 46.6835 10.6574 46.2861 10.0318C45.9138 9.44486 45.3855 8.97026 44.6929 8.74051L30.8456 5.49378C30.7844 4.94133 30.6097 4.40748 30.3325 3.92575C29.992 3.25326 29.3212 2.33257 28.6739 1.54102L45.523 5.49042C45.5625 5.50015 45.6017 5.51134 45.6404 5.52396C47.2587 6.02707 48.3974 7.10037 49.1169 8.23405C49.8212 9.34089 50.1885 10.6037 50.1885 11.6703V33.5119C50.1885 35.4908 48.6071 36.6648 47.7182 37.193C47.0958 37.5596 46.4336 37.8539 45.7444 38.0701L45.7008 38.0835L45.6857 38.0869L45.6806 38.0886C45.6806 38.0886 45.4358 38.159 45.6773 38.0886L4.74432 49.8378C4.72043 49.8445 4.69639 49.8507 4.67221 49.8563C3.47649 50.1414 2.11809 50.0659 1.1169 49.0429C0.219691 48.1273 0 46.8209 0 45.6553V21.112L0.00167711 21.0214V20.9963L0.00670824 20.9594C0.0167112 20.8097 0.0351882 20.6608 0.0620502 20.5133C0.109007 20.2416 0.191182 19.8743 0.335406 19.4534C0.704246 18.364 1.35524 17.3919 2.22207 16.636L17.9794 2.06257C17.9435 2.11404 17.9082 2.16603 17.8738 2.21854C17.1091 3.40252 16.876 4.63849 16.7619 5.2439L16.7552 5.28415C16.7394 5.37376 16.7226 5.46321 16.7049 5.55247Z"
										fill="#474747"
									/>
								</svg>
							</span>

							<h2 className="text-2xl font-bold text-black">Desserts</h2>
							<p>
								In the new era of technology we look in the future with
								certainty and pride for our life.
							</p>
							<button className="text-base font-bold text-[var(--button-color)] ">
								Explore Menu
							</button>
						</article>
					</div>
				</div>
			</Wrapper>

			{/* about us */}
			<AboutSection className="bg-[#F9F9F7]" showButton={true} imgUrl={"src/assets/food_img.png"}/>

			{/* services */}
			<div className="py-24 ">
				<Wrapper>
					<h1 className="pb-10 text-6xl max-w-2xl headline">
						We also offer unique services for your events
					</h1>
					<article className="grid grid-cols-4 gap-10">
						<article className="flex flex-col space-y-3  text-left">
							<img
								src="/catering.png"
								alt=""
								className="rounded-2xl w-80 h-auto"
							/>
							<h2 className="font-bold text-2xl">Catering</h2>
							<p>
								In the new era of technology we look in the future with
								certainty for life.
							</p>
						</article>
						<article className="flex flex-col space-y-3  text-left">
							<img
								src="/bd_party.png"
								alt=""
								className="rounded-2xl w-80 h-auto"
							/>
							<h2 className="font-bold text-2xl">Birthdays</h2>
							<p>
								In the new era of technology we look in the future with
								certainty for life.
							</p>
						</article>
						<article className="flex flex-col space-y-3  text-left">
							<img
								src="/weddings.png"
								alt=""
								className="rounded-2xl w-80 h-auto"
							/>
							<h2 className="font-bold text-2xl">Weddings</h2>
							<p>
								In the new era of technology we look in the future with
								certainty for life.
							</p>
						</article>
						<article className="flex flex-col space-y-3  text-left">
							<img
								src="/events.png"
								alt=""
								className="rounded-2xl w-80 h-full object-cover"
							/>
							<h2 className="font-bold text-2xl">Events</h2>
							<p>
								In the new era of technology we look in the future with
								certainty for life.
							</p>
						</article>
					</article>
				</Wrapper>
			</div>
			{/* Food Delivery */}
			<div className="py-24 bg-[#F9F9F7]">
				<Wrapper className="flex  justify-between gap-6">
					<article className="flex-1">
						<img src="/food_delivery_img.png" alt="" className=" h-auto w-[600px]" />
					</article>
					<article className="space-y-4 max-w-lg flex flex-col justify-center">
						<h1 className="text-6xl headline">Fastest Food Delivery in City</h1>
						<p className="text-base">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
						<ul className="space-y-3">
							<li className="flex space-x-4 items-center">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="30" height="30" rx="15" fill="#AD343E" />
									<rect
										width="15.07"
										height="15.07"
										transform="translate(7 7.00015)"
										fill="#AD343E"
									/>
									<path
										d="M14.535 12.0235V14.5352L16.4188 16.4189M20.1863 14.5352C20.1863 17.6563 17.6561 20.1864 14.535 20.1864C11.4139 20.1864 8.88379 17.6563 8.88379 14.5352C8.88379 11.4141 11.4139 8.88391 14.535 8.88391C17.6561 8.88391 20.1863 11.4141 20.1863 14.5352Z"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span className="text-xl text-black">Delivery within 30 minutes</span>
							</li>
							<li className="flex space-x-4 items-center">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="30" height="30" rx="15" fill="#AD343E" />
									<rect
										width="15.07"
										height="15.07"
										transform="translate(7 7.00015)"
										fill="#AD343E"
									/>
									<path
										d="M12.6513 15.791L16.4188 12.0235M12.9653 12.3375H12.9716M16.1049 15.477H16.1112M18.9305 20.1864V10.1397C18.9305 9.44617 18.3682 8.88391 17.6746 8.88391H11.3955C10.7019 8.88391 10.1396 9.44617 10.1396 10.1397V20.1864L12.3374 18.9306L14.5351 20.1864L16.7328 18.9306L18.9305 20.1864ZM13.2792 12.3375C13.2792 12.5108 13.1387 12.6514 12.9653 12.6514C12.7919 12.6514 12.6513 12.5108 12.6513 12.3375C12.6513 12.1641 12.7919 12.0235 12.9653 12.0235C13.1387 12.0235 13.2792 12.1641 13.2792 12.3375ZM16.4188 15.477C16.4188 15.6504 16.2783 15.791 16.1049 15.791C15.9315 15.791 15.7909 15.6504 15.7909 15.477C15.7909 15.3036 15.9315 15.1631 16.1049 15.1631C16.2783 15.1631 16.4188 15.3036 16.4188 15.477Z"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span className="text-xl text-black">Best Offer and Prices</span>
							</li>
							<li className="flex space-x-4 items-center">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="30" height="30" rx="15" fill="#AD343E" />
									<rect
										width="15.07"
										height="15.07"
										transform="translate(7 7.00012)"
										fill="#AD343E"
									/>
									<path
										d="M8.88379 8.88385H10.1396L10.3908 10.1397M11.3955 15.163H17.6746L20.1863 10.1397H10.3908M11.3955 15.163L10.3908 10.1397M11.3955 15.163L9.95571 16.6028C9.56014 16.9983 9.8403 17.6747 10.3997 17.6747H17.6746M17.6746 17.6747C16.981 17.6747 16.4188 18.2369 16.4188 18.9305C16.4188 19.6241 16.981 20.1863 17.6746 20.1863C18.3682 20.1863 18.9305 19.6241 18.9305 18.9305C18.9305 18.2369 18.3682 17.6747 17.6746 17.6747ZM12.6513 18.9305C12.6513 19.6241 12.089 20.1863 11.3955 20.1863C10.7019 20.1863 10.1396 19.6241 10.1396 18.9305C10.1396 18.2369 10.7019 17.6747 11.3955 17.6747C12.089 17.6747 12.6513 18.2369 12.6513 18.9305Z"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<span className="text-xl text-black">Online Services Available</span>
							</li>
						</ul>
					</article>
				</Wrapper>
			</div>
			{/* Customer Reviews */}
			<CustomerReviews />
		</section>
	);
};

export default MainPage;
