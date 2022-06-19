const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productSchema = require("./app/schema/productSchema.js");
const cors = require("cors");
const pizzasRoute = require("./app/routes/pizzas.js");
const port = process.env.PORT || 5000;

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect(
  `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.6ju06.mongodb.net/db_pizza?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

mongoose.connection.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});

app.use("/pizzas", pizzasRoute);
