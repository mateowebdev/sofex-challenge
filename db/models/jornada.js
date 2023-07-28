const { Model } = require('objection');

class Jornada extends Model {
  static get tableName() {
    return 'jornada';
  }

  static get relationMappings() {
    const Empleado = require('./empleado');
    return {
      empleado: {
        relation: Model.BelongsToOneRelation,
        modelClass: Empleado,
        join: {
          from: 'empleado.id',
          to: 'jornada.empleado_id',
        },
      },
    };
  }
}

module.exports = Jornada;