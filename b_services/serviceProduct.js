const Products = require('../a_models/modelProduct');

const createProduct = async ({ name, quantity }) => {
  const addProduct = await Products.createProduct({ name, quantity });
  return addProduct;
};

module.exports = { createProduct };