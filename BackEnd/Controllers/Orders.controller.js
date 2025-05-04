import Orderinfo from "../Models/orderinfoModel.js"; // Adjust the path based on your project structure

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { productId, userId, email, address, mobile } = req.body;
    console.log("hello",req.body);
    // Validate required fields
    if (!productId || !userId || !email || !address || !mobile) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save the order
    const newOrder = new Orderinfo({ productId, userId, email, address, mobile });
    await newOrder.save();

    res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Orderinfo.find({userId:req.body.userId}).populate("productId");
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orderinfo.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const  listOrders = async (req,res)=>{
  try {
    const orders = await Orderinfo.find({})
    return res.json({success:true,data:orders})
  } catch (error) {
    console.log(error);
    return res.json({success:false,msg:"error"})
    
  }
}


