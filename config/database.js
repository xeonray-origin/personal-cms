module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "toor"),
      ssl:
        env("ENV") === "develop"
          ? false
          : {
              rejectUnauthorized: false,
            },
    },
    debug: env("ENV") === "develop" ? true : false,
  },
});
