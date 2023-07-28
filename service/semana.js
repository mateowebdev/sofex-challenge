const semanaDAO = require("../dao/semana");


class SemanaService {
  /* -------------------------------------------------------------------------- */
  /*                                 BORRAR TODO                                */
  /* -------------------------------------------------------------------------- */
  async deleteWeek() {
    await semanaDAO.deleteAll()

    return { message: "DB clean." };
  }
}

module.exports = new SemanaService();
