const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productsRoutes');
const salesController = require ('./controllers/salesController');
const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.use(productsRoutes);
app.use('/sales', salesController);
app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});