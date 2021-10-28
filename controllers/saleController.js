const express = require('express');

const router = express.Router();

const { saleQuatityCheck, idRemoveCheck } = require('../services/serviceSale');

const STATUS_OK = 200;
// const STATUS_CREATED = 201;
// const STATUS_ERROR_CLIENT = 422;
const STATUS_ERROR_NOT_FOUND = 404;
const STATUS_ERROR = 500;
const messageErrorServer = { message: 'Sistema Indisponível' };

router.post('/', saleQuatityCheck, async (req, res) => {
    try {
      const salesArray = req.body;
      
      const newSale = await sale.adicionarSale(salesArray);
      
      res.status(STATUS_OK).json(newSale);
    } catch (error) {
      // console.log(erro.message)
      res.status(STATUS_ERROR).send(messageErrorServer);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const sale = await sale.getByIdSale(id);
      if (!sale) {
        res.status(STATUS_ERROR_NOT_FOUND).json({
          err: {
            code: 'not_found',
            message: 'Sale not found',
          },
        });
      }
      res.status(STATUS_OK).json(sale);
    } catch (error) {
      // console.log(erro.message);
      res.status(STATUS_ERROR).send(messageErrorServer);
    }
  });
  
  // Req06
  router.get('/', async (req, res) => {
    try {
      const sales = await sale.getAllSales();
      res.status(STATUS_OK).json({ 'sales': sales });
    } catch (error) {
      // console.log(erro.message);
      res.status(STATUS_ERROR).send(messageErrorServer);
    }
  });
  
  // Req07
  router.put('/:id', saleQuatityCheck, async (req, res) => {
    try {
      const { id } = req.params;
      const saleUpdate = req.body;
      const saleUpdated = await sale.updateIdSale(id, saleUpdate);
      res.status(STATUS_OK).json(saleUpdated);
    } catch (error) {
      // console.log(erro.message);
      res.status(STATUS_ERROR).send(messageErrorServer);
    }
  });
  
  router.delete('/:id', idRemoveCheck, async (req, res) => {
    try {
      const { id } = req.params;
      const saleRemoved = await sale.removeSale(id);
      res.status(STATUS_OK).json(saleRemoved);
    } catch (error) {
      // console.log(erro.message);
      res.status(STATUS_ERROR).send(messageErrorServer);
    }
  });

  module.exports = router;