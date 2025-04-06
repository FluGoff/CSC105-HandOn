import React from 'react'

const Button = ({ nameButton, bgColor, onClick}) => {
  return (
    <button className={`${bgColor} rounded-sm p-2 text-white block transition-all duration-200 cursor-pointer`} onClick={onClick}>
      {nameButton}
    </button>
  )
}
export default Button

