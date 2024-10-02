import React from 'react'
import headerPictureMobile from "../assets/images/illustration-sign-up-mobile.svg";
import headerPictureDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import Button from './Button';

type FormProps = {
    subscribeNewsletter:any;
    error:any;
}
const Form : React.FC<FormProps> = ({subscribeNewsletter, error }) => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 lg:items-center lg:p-6'>
        <picture className='lg:col-start-2 w-full'>
          <source srcSet={headerPictureDesktop} media="(min-width: 60rem)" />
          <img src={headerPictureMobile} alt="" className="w-full" />
        </picture>
        <form
          className="p-6 flex flex-col gap-4 lg:gap-8 lg:col-start-1 lg:row-start-1"
          onSubmit={subscribeNewsletter}
          action="/"
        >
          <h1 className="lg:text-6xl">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="flex flex-col gap-2 listgroup">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <label htmlFor="email" className="">
                Email address
              </label>
              <p aria-live="assertive" className=" text-tomato">
                {error && <span>{error}</span>}
              </p>
            </div>
            <input
              type="text"
              placeholder="email@company.com"
              id="email"
              required
              className={`focus:border-grey600 focus:outline-grey600 p-3 border border-grey200 rounded-lg ${
                error &&
                "border-tomato bg-tomato outline-tomato focus:outline-tomato focus:border-tomato bg-opacity-15 text-tomato"
              }`}
            />
          </div>
         <Button text="Subscribe to monthly newsletter" isSubmit={true} />
        </form>
      </div>
  )
}

export default Form