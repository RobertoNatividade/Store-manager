 const connection = require('./modelConnection');

const COLLECTION = 'products';

const addProduct = async ({ name, quantity }) => {
 const add = await connection().then((db) => db.collection(COLLECTION)
  .insertOne({ name, quantity }))
  .then((result) => ({
    _id: result.insertedId,
    name,
    quantity,
  }));    
  return add;
};

module.exports = { addProduct };