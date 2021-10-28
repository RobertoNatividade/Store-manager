const { MongoClient } = require('mongodb');

const DB = 'StoreManager';

const URL = 'mongodb://mongodb:27017/StoreManager';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = async () => {
   await MongoClient.connect(URL, OPTIONS)
    .then((conn) => conn.db(DB))
    .catch((err) => {
      console.log(err);
      process.exit();
    },);
};

module.exports = connection;