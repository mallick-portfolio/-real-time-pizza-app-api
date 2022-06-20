const express = require("express");
const router = express.Router();
const userOrders = require("../schema/orderSchema.js");
const mongoose = require("mongoose");

const OrderModel = mongoose.model("Order", userOrders);

router.post("/addtocart", async (req, res) => {
  console.log(req.body.productId);
  const existOrder = await OrderModel.findOne({
    productId: req.body.productId,
  });
  if (existOrder) {
    existOrder.quantity += 1;
    existOrder.totalprice += req.body.totalprice;
    const order = new OrderModel(existOrder);
    try {
      await order.save();
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    const order = new OrderModel(req.body);
    try {
      await order.save();
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

module.exports = router;
