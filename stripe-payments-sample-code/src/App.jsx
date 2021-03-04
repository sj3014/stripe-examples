import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51IQ36lDK0C6tfximA32MoJb3hD1aSoaEz0AOnJvtmbxGCrTa04K6vmdjPlpEVM1V3n7k2IEWgIUMihk8jndhvCX000GZYBMYra");

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
