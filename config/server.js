module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "AzTNSR3eSwX4gXQ1NNqLug==,QVpibspSg86ulLNJO3dIIw==,TfyucWvUlC7PR0AqOMRr2w==,E/n6ej4roSlRN4lK6Wh7ug==",
    ],
  },
});
