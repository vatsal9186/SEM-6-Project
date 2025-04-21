import Products from "../Models/productModel.js";

// CREATE
export const createProduct = async (req, res) => {
  try {
    const Product = new Products(req.body);
    const savedProducts = await Product.save();
    res.status(201).json(savedProducts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
export const getAllProducts = async (req, res) => {
  try {
    const Product = await Products.find();
    res.json(Product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductBycategory = async (req, res) => {
  try {
    console.log("hhhhhh",req.params.category);
    const Product = await Products.find({ category: req.params.category });
    if (!Product) return res.status(404).json({ message: 'Product not found' });
    res.json(Product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getNineproduct = async (req, res) => {
  try {
    console.log("hello");
    const products = await Products.find().limit(9);
    res.json(products);
  } catch (err) {
    console.log("hello", err);
    res.status(500).json({ error: err.message });
  }
};



// READ ONE
export const getProductById = async (req, res) => {
  try {
    console.log(req.params.id);
    const Product = await Products.findOne({ _id: req.params.id });
    if (!Product) return res.status(404).json({ message: 'Product not found' });
    res.json(Product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateProducts = async (req, res) => {
  try {
    const updatedProduct = await Products.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteProducts = async (req, res) => {
  try {
    const deletedProduct = await Products.findOneAndDelete({ id: req.params.id });
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



