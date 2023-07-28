const SemanaService = require("../service/semana");

class SemanaController {
  /* -------------------------------------------------------------------------- */
  /*                            BORRAR DATOS DE SEMAN                           */
  /* -------------------------------------------------------------------------- */
  async deleteWeek(req, res, next) {
    try {
      const result = await SemanaService.deleteWeek();
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new SemanaController();
