const express = require('express');

const bodyParser = require('body-parser');

const routerProduct = require('./Route/routerProduct');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routerProduct);

const PORT = 3000;

app.listen(PORT, () => console.log('App ouvindo a porta 3000!'));