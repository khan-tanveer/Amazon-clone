const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51Id80OSCAp9pf3PGyF5FOxAwkBInAhdiCnvmfLlUqJttETml2vbLMCXuvQPnr27zEZip94Tx8V5As2nh0637iZ2A00dpsxVUwa"
);

// API

// -  App config
const app = express();

// - Middlewares
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

// -  Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved BOM!!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // subunit of the currency
    currency: "USD",
  });

  //ok - Created
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone2-25697/us-central1/api
