const express = require('express');

const bodyParser = require('body-parser');

const products = require('./router/prodrouter');

const saleController = require('./controllers/saleController');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', products);

app.use('/sales', saleController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('App ouvindo a porta 3000!'));