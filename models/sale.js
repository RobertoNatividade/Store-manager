const {ObjectId} = require('mongodb');

const connect = require('./connection');

const adicionarSale = async(itensSold) =>
  connect().then(async(db) => {
    const adicionarSale = await db.collection('sales').insertOne({ itensSold });
    return adicionarSale.ops[0];
  });

  const getAllSales = async() =>
  connect().then(async(db) => await db.collection('sales').find().toArray());

const getByIdSale = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  };
  const product = connect()
    .then(async(db) => await db.collection('sales').findOne(ObjectId(id)));
  return product;
};

const updateIdSale = async (id, itensSold) => {
  if (!ObjectId.isValid(id)) {
    return null;
  };
  const sale = connect()
    .then(async(db) => await db.collection('sales')
      .updateOne({_id: ObjectId(id)}, {$set:{ itensSold }}));
  return {_id: id, itensSold};
};

const removeSale = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  };
  const remove = connect()
    .then(async(db) => await db.collection('sales')
      .deleteOne({_id: ObjectId(id)}));
  return remove;
};
  module.exports = {
      adicionarSale,
      getAllSales,
      getByIdSale,
      updateIdSale,
      removeSale
  };