const express = require('express');

const bodyParser = require('body-parser');

const prodrouter = require('./d_router/prodrouter');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', prodrouter);

app.listen(PORT, () => console.log('App ouvindo a porta 3000!'));