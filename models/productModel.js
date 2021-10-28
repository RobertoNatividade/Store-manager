const { ObjectId } = require('mongodb');
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

const getProductsById = async (id) => {
  if (ObjectId.isValid(id)) { 
    const getById = await connection()
    .then((db) => db
    .collection('products')
    .findOne(ObjectId(id)));

    return getById;
  }
  return null;
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

const updateProducts = async (id, { name, quantity }) => {
  const update = await connection()
  .then((db) => db
  .collection('products')
  .updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: {
        name,
        quantity,
      },
    },
    ))
    .then((result) => (result
    .matchedCount ? ({ id, name, quantity }) : null));

  return update;
};

const deleteProducts = async (id) => {
  const deleting = await connection()
  .then((db) => db
  .collection('products')
  // https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndDelete/
  .findOneAndDelete({ _id: ObjectId(id) })
  .then((result) => result.value));

  return deleting;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
};