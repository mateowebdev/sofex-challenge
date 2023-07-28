const Empleado = require("../db/models/empleado");

class EmpleadoDAO {
  /* ---------------------- Query: un empleado por su ID ---------------------- */
  findById(id) {
    return Empleado.query().findById(id);
  }
  /* ------------------------- Query: eliminar por ID ------------------------- */
  deleteById(id) {
    return Empleado.query().deleteById(id);
  }
  /* -------------------- Query: un empleado por su userID -------------------- */
  findByUserId(user_id) {
    return Empleado.query().where("user_id", "=", user_id);
  }
  /* -------------------- Query: un empleado + sus jornadas ------------------- */
  findOneJoinJornadas(id) {
    return Empleado.query().findById(id).withGraphFetched("jornada");
  }
  /* ----------------------- Query: todos los empleados ----------------------- */
  getAll() {
    return Empleado.query();
  }
  /* ----------------------- Query: crear nuevo empleado ---------------------- */
  postNew(nombre, apellido, cargo, user_id, salario) {
    return Empleado.query().insert({
      nombre,
      apellido,
      cargo,
      user_id,
      salario,
    });
  }
  /* ------------------ Query: actualizar empleado existente ------------------ */
  updateOne(id, nombre, apellido, cargo, salario) {
    return Empleado.query().findById(id).patch({
      nombre,
      apellido,
      cargo,
      salario,
    });
  }
  /* --------------------------- Query: borrar todo --------------------------- */
  deleteAll(){
    return Empleado.query().truncate();
  }
}

module.exports = new EmpleadoDAO();
