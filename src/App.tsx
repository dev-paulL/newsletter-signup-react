
import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mail, setMail] = useState('')
  const subscribeNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const emailInput = (form.elements.namedItem("email") as HTMLInputElement)
      .value;

    // Validate email (simple regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
      setError("Valid email required");
      return;
    }

    // Reset error if email is valid
    setError("");
    setSubscribed(true);
    setMail(emailInput);
  };

  return (
    <main className={`lg:bg-white max-w-[60rem] lg:rounded-[2rem] w-auto`}>
        {!subscribed && <Form subscribeNewsletter={subscribeNewsletter} error={error}/>}
        {subscribed && <Success email={mail} setSubscribed={setSubscribed} />}
    </main>
  );
}

export default App;
