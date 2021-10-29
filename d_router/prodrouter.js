const router = require('express').Router();

const controllerProduct = require('../c_controllers/controllerProduct');

router.post('/products', controllerProduct.createProduct);

module.exports = { router };
