const express = require('express');

const router = express.Router();

const { saleQuatityCheck } = require('../services/servicesSale');

router.post('/', saleQuatityCheck, async(req, res)=> {
    try {
      const salesArray = req.body;
      
      const newSale = await saleModel.addNewSale(salesArray);
      
      res.status(STATUS_OK).json(newSale);
    } catch (error) {
      console.log(erro.message);
      res.status(STATUS_ERRO).send(messageErrorServer);
    }
  });

  module.exports = router;