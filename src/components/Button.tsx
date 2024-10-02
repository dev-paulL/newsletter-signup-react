import React from 'react'

type ButtonProps = {
    isSubmit?:boolean;
    onClick?:() => void;
    extraClass?:string;
    text:string;
}
const Button: React.FC<ButtonProps> = ({isSubmit, onClick, extraClass, text}) => {
  return (
    <button
    type={`${isSubmit ? 'submit' : 'button'}`}
    onClick={onClick && onClick}
    className={`cursor-pointer bg-grey600 text-white font-bold p-3 rounded-md ${extraClass}`}
  >
    {text}
  </button>
  )
}

export default Button