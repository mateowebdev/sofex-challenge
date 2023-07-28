const Jornada = require("../db/models/jornada");
const Empleado = require("../db/models/empleado");

class PagosDAO {
  /* ------------------------------ resumir pagos ----------------------------- */
  getAll() {
    return Jornada.query()
      .select(
        "empleado_id",
        Jornada.query().sum("monto").as("monto_total"),
        Jornada.query().sum("horas_total").as("horas_totales"),
        "empleado.nombre",
        "empleado.apellido"
      )
      .leftJoin("empleado", "jornada.empleado_id", "empleado.id")
      .groupBy("empleado_id", "empleado.nombre", "empleado.apellido");

    /*   .select("empleado_id")
      .sum("monto as monto_total")
      .sum("horas_total as horas_totales")
      .groupBy("empleado_id"); */
  }
}

module.exports = new PagosDAO();
