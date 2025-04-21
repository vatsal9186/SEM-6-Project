import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById
} from "../Controllers/Orders.controller.js";

const OrderRouter = express.Router();

OrderRouter.post("/create-order", createOrder);         // Create a new order
OrderRouter.post("/get-order", getAllOrders);         // Get all orders
OrderRouter.get("/get/:id", getOrderById);      // Get order by ID

export default OrderRouter;
