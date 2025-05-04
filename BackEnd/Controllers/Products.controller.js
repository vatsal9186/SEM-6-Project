import Products from "../Models/productModel.js";

// CREATE
export const createProduct = (req, res) => {
  const { image, name, category, specs, price, additional } = req.body;
  console.log("hello", req.body);

  // Regex for validating image URLs
  const imageUrlPattern = /^(https?:\/\/.*\.(png|jpg|jpeg|gif|webp|bmp))(?:\?.*)?$/i;

  if (!image || !imageUrlPattern.test(image)) {
    return res.status(400).json({ error: "Invalid or missing image URL." });
  }

  const Product = new Products({
    image,
    name,
    category,
    specs,
    price,
    additional,
  });

  Product.save()
    .then((savedProduct) => {
      res.status(201).json(savedProduct);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
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
    // console.log("hello");
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
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


