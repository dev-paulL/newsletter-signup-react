import React from "react";
import validationImage from "../assets/images/icon-success.svg";
import Button from "./Button";

type SuccessProps = {
  email: string;
  setSubscribed: any;
};
const Success: React.FC<SuccessProps> = ({ email, setSubscribed }) => {
  const dismissMessage = () => {
    setSubscribed(false);
  }
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen p-6">
        <div className="flex flex-col gap-6 flex-1 mt-40">
          <img className="w-16" src={validationImage} alt="" />
          <h1 className="text-pretty">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
        <Button text="Dismiss message" onClick={dismissMessage}/>
      </div>
    </>
  );
};

export default Success;
