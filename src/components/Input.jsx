import React from 'react'

const Input = ({name, id, type = 'text', label, className = '', ...props}) => {
  return (
      <>
          <label htmlFor={id} className="block mb-1">{label}</label>
          <input 
            type={type} 
            name={name} 
            id={id} 
            className={`${className}`} 
            {...props} 
          />
      </>
  )
}

export default Input