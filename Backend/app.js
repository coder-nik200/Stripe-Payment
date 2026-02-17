const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Enable CORS for a specific origin (your frontend)
app.use(cors({ origin: process.env.CLIENT_URL }));

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true, // allows cookies if needed
//   }),
// );

// Parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hi");
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { product } = req.body;

    if (!product) {
      return res.status(400).json({ error: "Product missing" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: product.image ? [product.image] : [],
            },

            unit_amount: Math.round(product.price * 100),
          },

          quantity: 1,
        },
      ],

      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(3000, (req, res) => {
  console.log("🚀 Server is running on PORT 3000");
});
