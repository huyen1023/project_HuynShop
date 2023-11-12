const express = require("express");
const orderController = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.get("", orderController.get);
orderRouter.get("/:id", orderController.getById);
orderRouter.post("/search", orderController.getByCustomer);
orderRouter.post("", orderController.create);
orderRouter.put("/:id", orderController.update);
orderRouter.delete("/:id", orderController.delete);

module.exports = orderRouter;
