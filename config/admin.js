module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e99d5a97ffe51f2bc9d999fb7340b71a'),
  },
});
