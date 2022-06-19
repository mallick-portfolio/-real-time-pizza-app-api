const express = require("express");
const router = express.Router();
const productSchema = require("../schema/productSchema.js");
const mongoose = require("mongoose");

const Pizzas = mongoose.model("Pizzas", productSchema);

// define the home page route
router.get("/", async (req, res) => {
  const filter = {};
  const all = await Pizzas.find(filter);
  console.log(all)
  res.send(all)
});

module.exports = router;
