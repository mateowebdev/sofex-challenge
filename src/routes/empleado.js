const express = require('express');
const router = express.Router();

const empleadoController = require('../../controller/empleado');

/* -------------------------------------------------------------------------- */
/*                         OBTENER TODOS LOS EMPLEADOS                        */
/* -------------------------------------------------------------------------- */
router.get('/', empleadoController.getEmpleados);

/* -------------------------------------------------------------------------- */
/*                       OBTENER EMPLEADO CON JORNADAS                       */
/* -------------------------------------------------------------------------- */
router.get('/jornadas/:userId', empleadoController.getEmpleadosJoinJornadas);

/* -------------------------------------------------------------------------- */
/*                          OBTENER EMPLEADOS POR ID                          */
/* -------------------------------------------------------------------------- */
router.get('/:userId', empleadoController.getEmpleado);

/* -------------------------------------------------------------------------- */
/*                          ELIMINAR ELMPLEADO POR ID                         */
/* -------------------------------------------------------------------------- */
router.delete('/:userId', empleadoController.deleteEmpleado);

/* -------------------------------------------------------------------------- */
/*                            CREAR NUEVO EMPLEADO                            */
/* -------------------------------------------------------------------------- */
router.post('/', empleadoController.postEmpleado);

/* -------------------------------------------------------------------------- */
/*                             MODIFICAR EMPLEADO                             */
/* -------------------------------------------------------------------------- */
router.patch('/:userId', empleadoController.patchEmpleado);



module.exports = router;
