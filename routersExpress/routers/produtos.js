const express = require('express')
const controller = require('../controllers/produtosController')
const router = express.Router()

router.get('/novasSeries', controller.index);
router.get('/detalhesSeries', controller.show);

module.exports = router