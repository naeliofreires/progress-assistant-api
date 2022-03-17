const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

console.log("=> => => @nf", {
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.user,
  password: config.password,
});

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "dev"),
      user: env("DATABASE_USERNAME", "naeliofreires"),
      password: env("DATABASE_PASSWORD", "codigolimpo"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: false,
//       options: {
//         ssl: false,
//       },
//     },
//     debug: false,
//   },
// });
