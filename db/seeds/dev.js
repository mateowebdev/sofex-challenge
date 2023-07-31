exports.seed = async function (knex) {
  // truncate all existing tables
  await knex.raw("TRUNCATE TABLE jornada CASCADE");
  await knex.raw("TRUNCATE TABLE empleado CASCADE");

  // insert seed data
  await knex("empleado").insert([
    {
      nombre: "Jhon",
      apellido: "Doe",
      cargo: "Diseñador",
      user_id: "ZXCV1234!?-+",
      salario: 75,
    },
    {
      nombre: "Linda",
      apellido: "Perez",
      cargo: "Developer",
      user_id: "a*b*cd9876?%",
      salario: 80,
    },
  ]);

  await knex("jornada").insert([
    {
      fecha: "25/05/2023",
      ingreso: "09:00",
      egreso: null,
      horas_total: 0,
      monto: 0,
      empleado_id: 1,
    },
    {
      fecha: "26/05/2023",
      ingreso: "09:30",
      egreso: null,
      horas_total: 0,
      monto: 0,
      empleado_id: 1,
    },
    {
      fecha: "25/05/2023",
      ingreso: "08:45",
      egreso: null,
      horas_total: 0,
      monto: 0,
      empleado_id: 2,
    },
  ]);
};
