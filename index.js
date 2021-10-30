const express = require('express');
const bodyParser = require('body-parser');
const products = require('./controllers/products');
const { productName, productQtd } = require('./middlewares/middProduct');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', products.getAllProducts);
app.get('/products/:id', products.getProductById);
app.post('/products', productName, productQtd, products.postProduct);
app.put('/products/:id', productName, productQtd, products.putProduct);
app.delete('/products/:id', products.deleteProduct);

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));