module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e70468b5660053b83565128d01f6133'),
  },
});
