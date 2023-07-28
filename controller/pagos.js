const PagosService = require("../service/pagos");

class PagosController {
  /* -------------------------------------------------------------------------- */
  /*                         OBTENER PAGOS DE LA SEMANA                         */
  /* -------------------------------------------------------------------------- */
  async getPagos(req, res, next) {

    try {
      const pagos = await PagosService.getPagos()
      res.json(pagos);
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

module.exports = new PagosController();
