const stripe = require('stripe')('sk_test_51IQ36lDK0C6tfximg09CCB38JGZrnndrBbJ6gqTKEkevh9819AC1f5qndrZtqjzdS1AHHmNyKQxsuYTkpODD77vf00fyn3iREt');
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Running on port 4242'));