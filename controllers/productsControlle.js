const rescue = require('express-rescue');

const service = require('../services/service');

const createProduct = rescue(async (req, res) => {
  const { name, quantity } = req.body;

  const addProduct = await service.createProduct({ name, quantity });

  return res.status(201).json(addProduct);
});

const getAllProducts = rescue(async (_req, res) => {
  const awaitProducts = await service.getAllProducts();
  return res.status(200).json(awaitProducts);
});

const getProductsById = rescue(async (req, res) => {
  const { id } = req.params;

  const getProduct = await service.getProductsById(id);

  res.status(200).json(getProduct);
});

const updateProducts = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const updateProduct = await service.updateProducts(id, { name, quantity });

  res.status(200).json(updateProduct);
});

const deleteProducts = rescue(async (req, res) => {
  const { id } = req.params;

  const deleting = await service.deleteProducts(id);

  res.status(200).json(deleting);
});

module.exports = {
  createProduct,
  getProductsById,
  getAllProducts,
  updateProducts,
  deleteProducts,
};