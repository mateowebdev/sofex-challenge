const express = require('express');
const router = express.Router();

const semanaController = require('../../controller/semana');


/* -------------------------------------------------------------------------- */
/*                                LISTAR PAGOS                                */
/* -------------------------------------------------------------------------- */
router.delete('/', semanaController.deleteWeek);

module.exports = router;
