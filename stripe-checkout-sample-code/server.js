const stripe = require("stripe")(
  "sk_test_51IQ36lDK0C6tfximg09CCB38JGZrnndrBbJ6gqTKEkevh9819AC1f5qndrZtqjzdS1AHHmNyKQxsuYTkpODD77vf00fyn3iREt"
);
const express = require("express");
const app = express();
app.use(express.static("."));

const YOUR_DOMAIN = "http://localhost:3000/checkout";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Stubborn Attachments",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 2299,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "ABC",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 3899,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "DEF",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "GHI",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 2099,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    allow_promotion_codes,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log("Running on port 4242"));
