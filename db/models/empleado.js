const { Model } = require('objection');

class Empleado extends Model {
  static get tableName() {
    return 'empleado';
  }

  static get relationMappings() {
    const Jornada = require('./jornada');
    return {
      jornada: {
        relation: Model.HasManyRelation,
        modelClass: Jornada,
        join: {
          from: 'jornada.empleado_id',
          to: 'empleado.id',
        },
      },
    };
  }
}

module.exports = Empleado;