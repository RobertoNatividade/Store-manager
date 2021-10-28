const connect = require('./connection');

const adicionarSale = async(itensSold) =>
  connect().then(async(db) => {
    const adicionarSale = await db.collection('sales').insertOne({ itensSold });
    return adicionarSale.ops[0];
  });

  module.exports = {
      adicionarSale
  };