const sales = require('../models/sales');
const products = require('../models/products');

const STATUS_422 = 422;

const getAllSales = async () => {
  return await sales.getAllSales();
};

const postSales = async (newSale) => {
  const result = await sales.postSales(newSale);

  newSale.forEach(async (item) => {
    if (item.quantity < 1) {
      return {
        err: {
          code: 'stock_problem',
          message: 'Such amount is not permitted to sell'
        },
        status: 422,
      };

    } else {
      return await products.validateQtd(item.productId, item.quantity);
    }
  });

  return result;
};

const deleteSales = async (id) => {
  const data = await sales.getSalesById(id);

  if (data === null) {
    return {
      code: 'invalid_data',
      error: { message: 'Wrong sale ID format' },
      status: STATUS_422
    };

  } else {
    const del = sales.deleteSales(id);
    data.itensSold.forEach(async (e) => {
      await products.ValidateSum(e.productId, e.quantity);
    });

    return del;
  }
};

const putSales = async (id, quantity) => {
  return await sales.putSales(id, quantity);
};

const getSalesById = async (id) => {
  return await sales.getSalesById(id);
};

module.exports = {
  getAllSales,
  getSalesById,
  postSales,
  deleteSales,
  putSales,
};