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
    className={`cursor-pointer bg-grey600 text-white font-bold p-3 rounded-md ${extraClass} hover:bg-gradient-to-br hover:from-tomato hover:to-orange-500 hover:shadow-md hover:shadow-tomato transition-all`}
  >{/* background: rgb(247,36,129);
    background: linear-gradient(90deg, rgba(247,36,129,1) 0%, rgba(255,98,87,1) 54%); */}
    {text}
  </button>
  )
}

export default Button