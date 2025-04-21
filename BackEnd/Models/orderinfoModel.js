import mongoose from "mongoose";

const orderinfoSchema = new mongoose.Schema({
  productId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }], // ← array of numbers
  userId: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  mobile: { type: Number, required: true },
});

const Orderinfo = mongoose.models.Orderinfo || mongoose.model("Orderinfo", orderinfoSchema);

export default Orderinfo;
