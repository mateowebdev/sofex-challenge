const jornadaService = require("../service/jornada");

class JornadaController {
  /* -------------------------------------------------------------------------- */
  /*                              CREAR UNA JORNADA                             */
  /* -------------------------------------------------------------------------- */
  // Si se crea correctamente la devuelve.
  async postJornada(req, res, next) {
    const cuerpo = req.body;
    const { fecha, ingreso, empleado_id } = cuerpo;

    try {
      const jornada = await jornadaService.postJornada(
        fecha,
        ingreso,
        empleado_id
      );
      res.json(jornada);
    } catch (err) {
      console.error(err);
      if (err.nativeError.code === "23505") {
        res.status(400).json({ message: "ID en uso" });
      } else {
        res.status(500).json(err);
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                             ACTUALIZAR JORNADA                             */
  /* -------------------------------------------------------------------------- */
  // Si se actualiza correctamente devuelve 1.
  async patchJornada(req, res, next) {
    const { id, egreso } = req.body;

    try {
      const jornada = await jornadaService.patchJornada(id, egreso);
      res.json(jornada);
    } catch (err) {
      console.error(err);
      if (err.nativeError.code === "23505") {
        res.status(400).json({ message: "ID en uso" });
      } else {
        res.status(500).json(err);
      }
    }
  }
}

module.exports = new JornadaController();
