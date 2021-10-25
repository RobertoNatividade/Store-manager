const Products = require('../models/productsModels');

const getAllProducts = async () => {
    const getProducts = await Products.getAllProducts();
    return getProducts;
  };

  const createProduct = async ({ name, quantity }) => {
    const addProduct = await Products.createProduct({ name, quantity });
    return addProduct;
  };


  moduleexports = {
    createProduct,
    getAllProducts

  };