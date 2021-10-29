const rescue = require('express-rescue');

const service = require('../b_services/serviceProduct');

const createProduct = rescue(async (req, res) => {
    const { name, quantity } = req.body;
  
    const addProduct = await service.createProduct({ name, quantity });
  
    return res.status(201).json(addProduct);
  });

  module.exports = { createProduct };