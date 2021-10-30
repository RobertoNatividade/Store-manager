const Product = require('../b_services/serviceProduct');

allProducts = async (_req, res) => {
  try {
    const Produtos = await Product.allProducts();
    return res.status(200).json({ products: Produtos,},);
  }catch(error) {
    return res.status(400).json({ err: error.message,},);
  }
};

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const produto = await Product.createProduct({ name, quantity },);
    return res.status(201).json(produto);
  } catch (error) {
    return res.status(400).json({ err:error.message,},);
  }
};

module.exports = { allProducts, createProduct, };