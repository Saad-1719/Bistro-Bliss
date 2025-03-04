import React from 'react'

const Wrapper = ({className, children}) => {
  return (
      <div className={`max-w-[1400px] mx-auto px-8 ${className}`}>{ children}</div>
  )
}

export default Wrapper