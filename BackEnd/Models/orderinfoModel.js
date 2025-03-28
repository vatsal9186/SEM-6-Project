import mongoose from "mongoose";

const orderinfoSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: Number, required: true },
    
});

const Orderinfo = mongoose.model.Orderinfo || mongoose.model("Orderinfo", orderinfoSchema);

export default Orderinfo;
