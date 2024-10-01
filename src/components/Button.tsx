import React from 'react'

type ButtonProps = {
    submit?:boolean;
    extraClass?:string;
    text:string;
}
const Button: React.FC<ButtonProps> = ({submit, extraClass, text}) => {
  return (
    <button
    type="submit"
    className="cursor-pointer bg-grey600 text-white font-bold p-3 rounded-md"
  >
    {text}
  </button>
  )
}

export default Button