// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const {knexSnakeCaseMappers} = require('objection')

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'rootPG'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory: './seeds'
    },
    ...knexSnakeCaseMappers,
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
