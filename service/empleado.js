const empleadoDAO = require("../dao/empleado");
const jornadaDAO = require("../dao/jornada");

class EmpleadoService {
  /* -------------------------------------------------------------------------- */
  /*                              OBTENER EMPLEADO                              */
  /* -------------------------------------------------------------------------- */
  getEmpleado(userId) {
    return empleadoDAO.findByUserId(userId);
  }
  /* -------------------------------------------------------------------------- */
  /*                              ELIMINAR EMPLEADO                             */
  /* -------------------------------------------------------------------------- */
  async deleteEmpleado(userId) {
    const buscado = await empleadoDAO.findByUserId(userId);
    const { id } = buscado[0];
    await jornadaDAO.deleteAllById(id);
    
    return empleadoDAO.deleteById(id);
  }
  /* -------------------------------------------------------------------------- */
  /*                        OBTENER LISTADO DE EMPLEADOS                        */
  /* -------------------------------------------------------------------------- */
  getEmpleados() {
    return empleadoDAO.getAll();
  }
  /* -------------------------------------------------------------------------- */
  /*                       OBTENER EMPLEADO CON JORNADAS                       */
  /* -------------------------------------------------------------------------- */
  async getEmpleadosJoinJornadas(userId) {
    const buscado = await empleadoDAO.findByUserId(userId);
    const { id } = buscado[0];
    return empleadoDAO.findOneJoinJornadas(id);
  }

  /* -------------------------------------------------------------------------- */
  /*                            CREAR NUEVO EMPLEADO                            */
  /* -------------------------------------------------------------------------- */
  postEmpleado(nombre, apellido, cargo, user_id, salario) {
    return empleadoDAO.postNew(nombre, apellido, cargo, user_id, salario);
  }
  /* -------------------------------------------------------------------------- */
  /*                        ACTUALIZAR EMPLEADO EXISTENTE                       */
  /* -------------------------------------------------------------------------- */
  async patchEmpleado(userId, nombre, apellido, cargo, salario) {
    const buscado = await empleadoDAO.findByUserId(userId);
    const { id } = buscado[0];
    return empleadoDAO.updateOne(id, nombre, apellido, cargo, salario);
  }
}

module.exports = new EmpleadoService();
