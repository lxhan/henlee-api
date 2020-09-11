module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("SERVER_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "194ca7b9cb93f4d46d16b3ef69645e6a"),
    },
  },
});
