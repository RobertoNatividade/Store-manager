const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productsRoutes')

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(productsRoutes)

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});