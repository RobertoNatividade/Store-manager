const connection = require('./connection');

const getAllProducts = async () => {
    const getProducts = await connection()
    .then((db) => db
    .collection('products')
    .find()
    .toArray()
    .then((result) => ({ products: result })));
  
    return getProducts;
  };

const createProduct = async ({ name, quantity }) => {
    const addProduct = await connection()
    .then((db) => db
    .collection('products')
    .insertOne({ name, quantity }))
    .then((result) => ({
      _id: result.insertedId,
      name,
      quantity,
    }));
    return addProduct;
  };

module.exports = {
    createProduct,
    getAllProducts,
};