// const { ObjectId } = require('mongodb');
const connection = require('./modelConnection');

// const COLLECTION = 'products';

const allProducts = async () => {
  const connect = await connection()
  .then((db) => db.collection('products').find().toArray());
  return connect;
};

const createProduct = async (product) => {
  try {
    const criarProduto = await connection()
    .then((bd) => bd.collection('products').insertOne(product));
    return criarProduto.ops[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = { allProducts, createProduct };