const { ObjectId } = require('mongodb');
const connect = require('./connection');

// Requisito05
const addNewSale = async (itensSold) =>
  connect().then(async (db) => {
    const addSale = await db.collection('sales').insertOne({ itensSold });
    return addSale.ops[0];
  });

// Requisito06
const getAllSales = async () =>
  connect().then((db) => db.collection('sales').find().toArray());

// Requisito06
const getByIdSale = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const product = connect()
    .then(async (db) => db.collection('sales').findOne(ObjectId(id)));
  return product;
};

// Requisito07
const updateIdSale = async (id, itensSold) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  connect()
    .then(async (db) => db.collection('sales')
      .updateOne({ _id: ObjectId(id) }, { $set: { itensSold } }));
  return { _id: id, itensSold };
};

// Requisito08
const removeSale = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const remove = connect()
    .then(async (db) => db.collection('sales')
      .deleteOne({ _id: ObjectId(id) }));
  return remove;
};

module.exports = { addNewSale, getAllSales, getByIdSale, updateIdSale, removeSale };