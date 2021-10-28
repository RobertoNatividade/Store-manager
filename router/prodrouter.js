const router = require('express').Router();
const {
    createProduct,
    getProductsById,
    getAllProducts,
    updateProducts,
    deleteProducts,
} = require('../controllers/productController');

router.post('/products', createProduct);

router.get('/products', getAllProducts);

router.get('/products/:id', getProductsById);

router.put('/products/:id', updateProducts);

router.delete('/products/:id', deleteProducts);

module.exports = router;