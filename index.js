const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const productController = require('./controllers/productController');

const PORT = 3000;

app.use(bodyParser.json());

app.use('/products', productController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('App ouvindo a porta 3000!'));