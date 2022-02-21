// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // TODO Use ENV variable here instead
      database: "mydb",

      // change to your db user

      user: "username",
      password: "password",
      port: 5420,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
