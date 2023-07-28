exports.up = function (knex) {
  return knex.schema
  .createTable("empleado", (table) => {
    table.increments();
    table.string("nombre").notNullable();
    table.string("apellido").notNullable();
    table.string("cargo").notNullable();
    table.string("user_id").notNullable().unique();
    table.float("salario").notNullable();
    table.timestamps(true, true);
  })
    .createTable("jornada", (table) => {
      table.increments();
      table.date("fecha").notNullable();
      table.time("ingreso", { precision: 6 });
      table.time("egreso", { precision: 6 });
      table.float("horas_total");
      table.float("monto");
      table.timestamps(true, true);
      table.integer("empleado_id").references("id").inTable("empleado");
    });
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("jornada")
  .dropTableIfExists("empleado")
};
