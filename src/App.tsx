import headerPictureMobile from "./assets/images/illustration-sign-up-mobile.svg";
import headerPictureDesktop from "./assets/images/illustration-sign-up-desktop.svg";

function App() {
  return (
    <main>
      <picture>
        <source srcSet={headerPictureDesktop} media="(min-width: 60rem)" />
        <img src={headerPictureMobile} alt="" />
      </picture>
      <form className="p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-grey800">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-2 listgroup">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="email" className="text-xs font-bold">Email address</label>
          <input
            type="email"
            placeholder="email@company.com"
            id="email"
            required
            className="p-3 border border-grey200 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-grey600 text-white font-bold p-3 rounded-md"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </main>
  );
}

export default App;
