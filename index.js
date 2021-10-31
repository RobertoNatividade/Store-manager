const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/productsRoutes');
const salesRoutes = require('./routes/salesRoutes');
const { handleError } = require('./middlewares');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);
app.use('/', handleError);

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));