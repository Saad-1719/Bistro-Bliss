import React from 'react'
import Wrapper from './Wrapper'
import Lottie from 'lottie-react'
import animation from "../assets/404.json"
const NotFound = () => {
  return (
      <Wrapper>
          <div className='max-w-2xl mx-auto'>
              
          <Lottie animationData={animation} loop={true} />
          </div>
          
    </Wrapper>
  )
}

export default NotFound