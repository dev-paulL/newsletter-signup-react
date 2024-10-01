import headerPictureMobile from "./assets/images/illustration-sign-up-mobile.svg";
import headerPictureDesktop from "./assets/images/illustration-sign-up-desktop.svg";

function App() {
  return (
    <main>
      <picture>
        <source srcSet={headerPictureDesktop} media="(min-width: 60rem)" />
        <img src={headerPictureMobile} alt="" />
      </picture>

      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form>
        <label htmlFor="email">Email address</label>
        <input type="email" placeholder="email@company.com" id="email" />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </main>
  );
}

export default App;
