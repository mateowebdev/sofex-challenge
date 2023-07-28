const Jornada = require("../db/models/jornada");

class SemanaDAO {
  /* ------------------------------ resumir pagos ----------------------------- */
  deleteAll() {
    Jornada.query().truncate();
  }
}

module.exports = new SemanaDAO();
