const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const {
  createProduct,  
  getAllProducts,  
} = require('./controllers/productsControlle');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAllProducts);

app.post('/products', createProduct);

app.listen(PORT, () => console.log(`Servidor na porta: ${PORT}`));
