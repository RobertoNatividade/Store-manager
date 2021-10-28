const Products = require('../models/productModel');

const getAllProducts = async () => {
  const getProducts = await Products.getAllProducts();
  return getProducts;
};

const getProductsById = async (id) => {
  const getById = await Products.getProductsById(id);
  return getById;
};

const createProduct = async ({ name, quantity }) => {
  const addProduct = await Products.createProduct({ name, quantity });
  return addProduct;
};

const updateProducts = async (id, { name, quantity }) => {
  const updateId = await Products.updateProducts(id, { name, quantity });
  return updateId;
};

const deleteProducts = async (id) => {
  const deleting = await Products.deleteProducts(id);
  return deleting;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
};