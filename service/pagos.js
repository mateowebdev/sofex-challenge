const jornadaDAO = require("../dao/jornada");
const empleadoDAO = require("../dao/empleado");
const pagosDAO = require("../dao/pagos");

class PagosService {
  /* -------------------------------------------------------------------------- */
  /*                          OBTENER LISTADO DE PAGOS                          */
  /* -------------------------------------------------------------------------- */
  async getPagos() {
    const pagos = await pagosDAO.getAll();
    return pagos;
  }
}

module.exports = new PagosService();
