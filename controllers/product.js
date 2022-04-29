const Product = require("./../models/Product");

//create new product
exports.newProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
};

//get all products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
};

//get single product detail
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: " product not found" });
  }
};
//update single product detail
exports.updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const product = req.body;
  try {
    await Product.findByIdAndUpdate(id, product, { useFindAndModify: false });
    res.status(200).json({
      success: true,
      message: "Record updated successfully",
      product,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: " product not found" });
  }
};

//Delete sigle product
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.send({ message: "product not found" });
    } else {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Record deleted successfully." });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: " product not found" });
  }
};
