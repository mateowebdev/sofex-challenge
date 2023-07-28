const express = require('express');
const router = express.Router();

const pagosController = require('../../controller/pagos');


/* -------------------------------------------------------------------------- */
/*                                LISTAR PAGOS                                */
/* -------------------------------------------------------------------------- */
router.get('/', pagosController.getPagos);

module.exports = router;
