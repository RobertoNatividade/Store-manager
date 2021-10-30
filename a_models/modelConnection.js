const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';

const DB_NAME = 'StoreManager';

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

let dataName = null;

const connection = () => (dataName 
    ? Promise.resolve(dataName) : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conex) => {
        dataName = conex.db(DB_NAME);
        return dataName;
    }));

module.exports = connection;