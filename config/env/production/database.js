const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});

// DATABASE_URL: postgres://pvphowjxzajsaa:210537d3c6716dae0b26309fd7604948f8914e1994782466a8b5d02d0545b6f0@ec2-52-22-81-147.compute-1.amazonaws.com:5432/d7gidct287pg7u
