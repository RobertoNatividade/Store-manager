const connection = require('./modelConnection');

const COLLECTION = 'products';

const createProduct = async ({ name, quantity }) => {
 const addProduct = await connection().then((db) => db.collection(COLLECTION)
  .insertOne({ name, quantity }))
  .then((result) => ({
    _id: result.insertedId,
    name,
    quantity,
  }));    
  return addProduct;
};

module.exports = { createProduct };