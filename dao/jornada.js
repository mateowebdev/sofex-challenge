const Jornada = require("../db/models/jornada");

class JornadaDAO {
    /* --------------------------- buscar una jornada --------------------------- */
    getOne(id) {
      return Jornada.query().findById(id);
    }
    /* ----------------------- obtener todas las jornadas ----------------------- */
    getAll(){
      return Jornada.query();
    }
    /* ------------------------- eliminar todas de un ID ------------------------ */
    deleteAllById(id){
      return Jornada.query().delete()
      .where("empleado_id", "=", id)
    }
  /* --------------------------- crear nueva jornada -------------------------- */
  postNew(fecha, ingreso, empleado_id) {
    return Jornada.query().insert({
      fecha,
      ingreso,
      empleado_id,
    });
  }
  /* -------------------- actualizar jornada, cargar egreso ------------------- */
  patchOne(id, egreso, horas_total, monto) {
    console.log(id, egreso);
    return Jornada.query().findById(id).patch({
      egreso,
      horas_total,
      monto
    });
  }
  /* --------------------------- Query: borrar todo --------------------------- */
  deleteAll(){
    return Jornada.query().truncate();
  }
}

module.exports = new JornadaDAO();
