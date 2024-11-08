const authRoutes = require('./auth.route.js');

async function routes(fastify, options) {
  fastify.get('/ping', async (request, reply) => {
    return { message: 'The server is running' };
  });

  fastify.register(authRoutes, {
    prefix: '/auth'
  });
}

module.exports = routes;
