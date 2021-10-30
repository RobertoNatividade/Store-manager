const service = require('../b_services/serviceProduct');

const validNome = async (req, res, next) => {
  const { name } = req.body;
  const allProducts = await service.allProducts();
  const nameChecked = allProducts.some((products) => products.name === name);
  if (nameChecked) {
    return res.status(422).json({ err: {
      code: 'invalid_data',
      message: 'Product already exists' } }); 
  }
  if (name.length < 5) {
    return res.status(422).json({ err: {
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long' } }); 
  }
  next();
};

const validQuantidade = (req, res, next) => {
    const { quantity } = req.body;
    if (quantity <= 0) {
        return res.status(422).json(
            { err: { 
                code: 'invalid_data', 
                message: '"quantity" must be larger than or equal to 1',
            } },
        );
    }
    if (typeof quantity !== 'number') {
        return res.status(422).json(
            { err: { code: 'invalid_data', message: '"quantity" must be a number' } },
        );
    }
    next();
};

module.exports = {
    validNome,
    validQuantidade,
  };