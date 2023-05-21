module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['58bc37e59e5826ef6d8299c7c74bce1d36622e99ac91271ba98b9ced192d8e2bee71805f5a33686a6de2b38f03f9f41598850e904855c38a4452e709f86c0f8da03c3191bbbd31ca477cfe9af1760e6c11a4474132bc826952502726f42de7a7e0b2725b7573fd3c2a253139ce2edaa2995f28fd33d9ec77b25b3e8d4025d0f2'],
  },
});
