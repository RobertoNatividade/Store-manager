const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
const DB_NAME = 'StoreManager';

let db = null;

const connection = () => {
  return MongoClient.connect(MONGO_DB_URL, OPTIONS)
   .then((conn) => conn.db(DB_NAME));
};

module.exports = connection;