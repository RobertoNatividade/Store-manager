const {
    getAllProducts,
    getProductsById,
  } = require('../services/service');
  
  const productExists = async (req, res, next) => {
    const { name } = req.body;
    const getProducts = await getAllProducts();
    const productsExists = getProducts.products
      .find((productName) => productName.name === name);
  
    if (productsExists) {
      return res.status(422).json({
        err: {
          code: 'invalid_data',
          message: 'Product already exists',
        },
      });
    }
    next();
  };
  
  const validateNameLength = async (req, res, next) => {
    const { name } = req.body;
  
    if (name.length < 5) {
      return res.status(422).json({
        err: {
          code: 'invalid_data',
          message: '"name" length must be at least 5 characters long',
        },
      });
    }
    next();
  };
  
  const productsQuantity = async (req, res, next) => {
    const { quantity } = req.body;
  
    if (quantity < 1) {
      return res.status(422).json({
        err: {
          code: 'invalid_data',
          message: '"quantity" must be larger than or equal to 1',
        },
      });
    }
  
    if (typeof quantity !== 'number') {
      return res.status(422).json({
        err: {
          code: 'invalid_data',
          message: '"quantity" must be a number',
        },
      });
    }
    next();
  };
  
  const validListFormat = async (req, res, next) => {
    const { id } = req.params;
    const productId = await getProductsById(id);
  
    if (productId === null) {
      return res.status(422).json({
        err: {
          code: 'invalid_data',
          message: 'Wrong id format',
        },
      });
    }
    next();
  };
  
  module.exports = {
    validateNameLength,
    productExists,
    productsQuantity,
    validListFormat,
  };