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

  
module.exports = { 
    createProduct,
    getAllProducts,
};