import React from "react";
import validationImage from "../assets/images/icon-success.svg";

type SuccessProps = {
  email: string;
};
const Success: React.FC<SuccessProps> = ({ email }) => {
  return (
    <div className="flex flex-col gap-6 justify-items-center min-h-screen">
      <img className="w-16" src={validationImage} alt="" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription
      </p>
      
    </div>
  );
};

export default Success;
