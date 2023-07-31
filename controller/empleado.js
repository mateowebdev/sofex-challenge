const empleadoService = require("../service/empleado");

function validarString(str) {
  // Verificar si el string tiene exactamente 12 caracteres
  if (str.length !== 12) {
    return false;
  }

  // Verificar si contiene al menos 4 letras, 4 números y 4 símbolos
  const letras = str.match(/[A-Za-z]/g);
  const numeros = str.match(/[0-9]/g);
  const simbolos = str.match(/[^A-Za-z0-9]/g);

  if (!letras || letras.length < 4) {
    return false;
  }

  if (!numeros || numeros.length < 4) {
    return false;
  }

  if (!simbolos || simbolos.length < 4) {
    return false;
  }

  return true;
}

class EmpleadoController {
  /* -------------------------------------------------------------------------- */
  /*                               BUSCAR EMPLEADO                              */
  /* -------------------------------------------------------------------------- */
  async getEmpleado(req, res, next) {
    try {
      const empleado = await empleadoService.getEmpleado(req.params.userId);
      res.json(empleado);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                          ELIMINAR EMPLEADO BUSCADO                         */
  /* -------------------------------------------------------------------------- */
  async deleteEmpleado(req, res, next) {
    const userId = req.params.userId;

    try {
      const empleado = await empleadoService.deleteEmpleado(userId);
      res.json(empleado);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                         BUSCAR TODOS LOS EMPLEADOS                         */
  /* -------------------------------------------------------------------------- */
  async getEmpleados(req, res, next) {
    try {
      const empleados = await empleadoService.getEmpleados();
      res.json(empleados);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                       OBTENER EMPLEADOS CON JORNADAS                       */
  /* -------------------------------------------------------------------------- */
  async getEmpleadosJoinJornadas(req, res, next) {
    const userId = decodeURIComponent(req.params.userId);
    try {
      const empleados = await empleadoService.getEmpleadosJoinJornadas(userId);
      res.json(empleados);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                            CREAR NUEVO EMPLEADO                            */
  /* -------------------------------------------------------------------------- */
  async postEmpleado(req, res, next) {
    const cuerpo = req.body;
    const { nombre, apellido, cargo, user_id, salario } = cuerpo;

    if (!validarString(user_id)) {
      res.status(400).json({ message: "Id de usuario no válido." });
    }

    try {
      const empleado = await empleadoService.postEmpleado(
        nombre,
        apellido,
        cargo,
        user_id,
        salario
      );
      res.json(empleado);
    } catch (err) {
      console.error(err);

      res.status(500).json(err);
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                        ACTUALIZAR DATOS DE EMPLEADO                        */
  /* -------------------------------------------------------------------------- */
  async patchEmpleado(req, res, next) {
    const userId = decodeURIComponent(req.params.userId);

    const { nombre, apellido, cargo, salario } = req.body;

    try {
      const empleado = await empleadoService.patchEmpleado(
        userId,
        nombre,
        apellido,
        cargo,
        salario
      );
      res.json(empleado);
    } catch (err) {
      console.error(err);

      res.status(500).json(err);
    }
  }
}

module.exports = new EmpleadoController();
