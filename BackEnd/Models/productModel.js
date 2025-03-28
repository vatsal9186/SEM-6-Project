import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Category: { type: String, required: true },
  specs: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  additional: { type: String, required: true },
});

const Product = mongoose.model.Product || mongoose.model("Product", productSchema);

export default Product;
