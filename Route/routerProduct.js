const route = require('express').Router();
const controllerProduct = require('../c_controller/controllerProduct');
const { validNome, validQuantidade } = require('../middleware/midProduct');

const pipeline = [validNome, validQuantidade];

route.get('/', controllerProduct.allProducts);
route.post('/', pipeline.createProduct);

module.exports = route;