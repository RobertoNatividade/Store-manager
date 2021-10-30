const Product = require('../a_models/modelProduct');

const allProducts = async () => {
  const products = await Product.allProducts();
  return products;
};

const createProduct = async (product) => {
  const products = await Product.createProduct(product);
  return products;
}

module.exports = { allProducts, createProduct, };