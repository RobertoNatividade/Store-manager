// models/connection.js
const { MongoClient } = require('mongodb');

const pars = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';
let conteudo = null;

function connection() {
    return conteudo
    ? Promise.resolve(conteudo)
    : MongoClient.connect(MONGO_DB_URL, pars)
    .then((conn) => {
      conteudo = conn.conteudo(DB_NAME);
      return conteudo;
    });
  };

module.exports = connection;