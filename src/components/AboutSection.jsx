import React from 'react'
import Wrapper from './Wrapper'

const AboutSection = ({imgUrl, showButton, className}) => {
  return (
      <div className={`py-24 bg-[#F9F9F7] ${className}`}>
				<Wrapper className="flex items-center justify-between gap-20 ">
					<article className=" relative flex items-center justify-center  ">
						<img
							src={imgUrl}
							alt=""
							className="rounded-2xl w-[550px] h-auto items-start justify-start"
						/>
						<div className="top-[55%] left-[40%] absolute bg-[var(--primary-color)] text-white p-12 rounded-xl max-w-md">
							<p className="font-bold text-lg py-6">Come and visit us</p>
							<div className="space-y-3">
								<span className="flex space-x-5 items-center justify-left">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
											stroke="white"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<span>0987654</span>
								</span>
								<span className="flex space-x-5  items-center justify-left">
									<svg
										width="20"
										height="16"
										viewBox="0 0 20 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z"
											stroke="white"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									<span>happytummy@restaurant.com</span>
								</span>
								<span className="flex space-x-5  items-start justify-left">
									<svg
										width="44"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
											stroke="white"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
											stroke="white"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<span className="max-w-md">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Minima, molestiae.
									</span>
								</span>
							</div>
						</div>
					</article>
					<article className="space-y-5 max-w-3xl px-6 py-28 pr-20">
						<h1 className="text-6xl headline ">
							We provide healthy food for your family.
						</h1>
						<p className="text-lg">
							Our story began with a vision to create a unique dining experience
							that merges fine dining, exceptional service, and a vibrant
							ambiance. Rooted in city's rich culinary culture, we aim to honor
							our local roots while infusing a global palate.
						</p>
						<p className="text-black">
							At place, we believe that dining is not just about food, but also
							about the overall experience. Our staff, renowned for their warmth
							and dedication, strives to make every visit an unforgettable
							event.
                  </p>
                  {showButton &&
                  <button className="text-black px-5 py-2 rounded-full border mt-6 ">
                  More About Us
              </button>
                  }
						
					</article>
				</Wrapper>
			</div>
  )
}

export default AboutSection