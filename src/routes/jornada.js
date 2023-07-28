const express = require('express');
const router = express.Router();

const jornadaController = require('../../controller/jornada');

/* -------------------------------------------------------------------------- */
/*                             CREAR NUEVA JORNADA                            */
/* -------------------------------------------------------------------------- */
router.post('/', jornadaController.postJornada);

/* -------------------------------------------------------------------------- */
/*                             ACTUALIZAR JORNADA                             */
/* -------------------------------------------------------------------------- */
router.post('/update', jornadaController.patchJornada);

module.exports = router;
