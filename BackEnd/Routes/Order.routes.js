import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  listOrders
} from "../Controllers/Orders.controller.js";

const OrderRouter = express.Router();

OrderRouter.post("/create-order", createOrder);         // Create a new order
OrderRouter.post("/get-order", getAllOrders);    //USER     // Get all orders
OrderRouter.get("/get/:id", getOrderById);  
OrderRouter.get("/allorders", listOrders)    // Get order by ID

export default OrderRouter;