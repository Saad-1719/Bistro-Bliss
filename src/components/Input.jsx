import React from 'react'

const Input = ({ name, id, type = 'text', label, className = '', labelClassName='', divClassName='',...props }) => {
  return (
      <div className={`${divClassName}`}>
      <label htmlFor={id} className={`block mb-1 ${labelClassName}`}>{label}</label>
          <input 
            type={type} 
            name={name} 
            id={id} 
            className={`${className}`} 
            {...props} 
          />
      </div>
  )
}

export default Input