const jornadaDAO = require("../dao/jornada");
const empleadoDAO = require("../dao/empleado");

function calcularMinutosTranscurridos(horarioIngreso, horarioEgreso) {
  const [horaIngreso, minutosIngreso] = horarioIngreso.split(":").map(Number);
  const [horaEgreso, minutosEgreso] = horarioEgreso.split(":").map(Number);

  const minutosTranscurridos =
    (horaEgreso - horaIngreso) * 60 + (minutosEgreso - minutosIngreso);

  if (minutosTranscurridos < 0) {
    return 0;
  }
  return minutosTranscurridos;
}

class JornadaService {
    /* -------------------------------------------------------------------------- */
    /*                             CREAR NUEVA JORNADA                            */
    /* -------------------------------------------------------------------------- */
  postJornada(fecha, ingreso, empleado_id) {
    return jornadaDAO.postNew(fecha, ingreso, empleado_id);
  }

  /* -------------------------------------------------------------------------- */
  /*                             ACTUALIZAR JORNADA                             */
  /* -------------------------------------------------------------------------- */
  async patchJornada(id, egreso) {
    //buscar la jornada, obtengo el ingreso
    const { ingreso, empleado_id } = await jornadaDAO.getOne(id);

    //buscar monto del empleado
    const { salario } = await empleadoDAO.findById(empleado_id);
    const precioMinuto = Number(parseFloat(salario / 60).toFixed(2));

    //calcular horas total
    const minutosTrabajados = calcularMinutosTranscurridos(ingreso, egreso);
    const monto = Math.ceil(minutosTrabajados * precioMinuto);
    //calculo de horas
    const horas_total = Number((minutosTrabajados / 60).toFixed(2));

    return jornadaDAO.patchOne(id, egreso, horas_total, monto);
  }
}

module.exports = new JornadaService();
