const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

const {
  createProduct,
  getProductsById,
  getAllProducts,
  updateProducts,
  deleteProducts,
} = require('./controllers/productsControlle');

const {
  validateNameLength,
  productExists,
  productsQuantity,
  validListFormat,
} = require('./middlewares/validateData');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/:id',
validListFormat,
getProductsById);

app.get('/products', getAllProducts);

app.put('/products/:id',
validateNameLength,
productsQuantity,
updateProducts);

app.post('/products',
validateNameLength,
productExists,
productsQuantity,
createProduct);

app.delete('/products/:id',
validListFormat,
deleteProducts);

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});