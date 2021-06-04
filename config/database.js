module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "192.168.8.44"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "project-management"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "postgres"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
