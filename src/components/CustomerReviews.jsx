import React from 'react'
import Wrapper from './Wrapper'
const CustomerReviews = () => {
  return (
    <section className="py-24">
                    <Wrapper>
                    <h1 className="pb-10 text-6xl text-center headline">
                            What Our Customer Says
                        </h1>
                        <div className="grid grid-cols-3 gap-10">
                            <article className="p-10 bg-[#F9F9F7] rounded-2xl">
                                <h2 className="text-2xl font-bold text-[var(--button-color)]">“The best restaurant”</h2>
                                <p className="text-lg py-4">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                                <hr className="py-4 border-[var(--primary-color)]"/>
                                <article className="flex  items-center space-x-4 py-2"><img src="src/assets/sophie.png" alt="" />
                                    <span>
    
                                    <h2 className="font-bold text-black">Sophire Robson</h2>
                                    <h3 className="text-black">Los Angeles, CA</h3>
                                    </span>
                                </article>
                            </article>
                            <article className="p-10 bg-[#F9F9F7] rounded-2xl">
                                <h2 className="text-2xl font-bold text-[var(--button-color)]">“Simply delicious”</h2>
                                <p className="text-lg py-4">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                                <hr className="py-4"/>
                                <article className="flex  items-center space-x-4 py-2"><img src="src/assets/matt.png" alt="" />
                                    <span>
    
                                    <h2 className="font-bold text-black">Matt Cannon</h2>
                                    <h3 className="text-black">San Diego, CA</h3>
                                    </span>
                                </article>
                            </article>
                            <article className="p-10 bg-[#F9F9F7] rounded-2xl">
                                <h2 className="text-2xl font-bold text-[var(--button-color)]">“One of a kind restaurant”</h2>
                                <p className="text-lg py-4">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                                <hr className="py-4"/>
                                <article className="flex  items-center space-x-4 py-2"><img src="src/assets/andy.png" alt="" />
                                    <span>
    
                                    <h2 className="font-bold text-black">Andy Smith</h2>
                                    <h3 className="text-black">San Francisco, CA</h3>
                                    </span>
                                </article>
                            </article>
                        </div>
                    </Wrapper>
    
                </section>
  )
}

export default CustomerReviews