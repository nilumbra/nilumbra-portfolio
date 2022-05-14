const path = require('path');

// const SQLITE_DEFAULT_CONFIG = {
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// }

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_local"),
      username: env("DATABASE_USERNAME", "strapi_admin"),
      password: env("DATABASE_PASSWORD", "admin_nilumbra"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});




