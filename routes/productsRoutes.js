const router = require('express').Router()
const { deleteProducts,} = require('./controllers/productsControlle');

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

router.get('/products/:id',
validListFormat,
getProductsById);

router.get('/products', getAllProducts);

router.put('/products/:id',
validateNameLength,
productsQuantity,
updateProducts);

router.post('/products',
validateNameLength,
productExists,
productsQuantity,
createProduct);

router.delete('/products/:id',
validListFormat,
deleteProducts);

router.delete('/products/:id', validListFormat, deleteProducts);

module.expports = router