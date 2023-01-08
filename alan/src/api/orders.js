const stripe = require('stripe')('sk_test_51MMwgnSHopb5s6oEOKvQMFG1A3w4fLSmWLd5Sm0OIzl0gptzcb78DunSvPd5tipXOqKEikEWyfSM6nTB0P1XTXlF00PW5tVgT6');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 4242'));