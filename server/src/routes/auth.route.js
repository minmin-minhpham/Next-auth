const { RegisterBody, RegisterRes, LoginRes, LoginBody } = require('../validations/auth.schema.js');
const requireLoginedHook = require('../hooks/auth.hooks.js');
const authController = require('../controllers/auth.controller.js');

async function authRoutes(fastify, opts) {
  fastify.post(
    '/register',
    {
      schema: {
        response: {
          201: RegisterRes
        },
        body: RegisterBody
      }
    },
    async (request, reply) => {
      const { body } = request;
      const { session, newuser } = await authController.register(body);

      reply.code(201).send({
        status: 'Success',
        message: 'Registered Ok !!!',
        data: {
          newuser,
          token: session.token,
          expiresAt: session.expiresAt.toISOString()
        }
      });
    }
  );

  fastify.post(
    '/login',
    {
      schema: {
        response: { 200: LoginRes },
        body: LoginBody
      }
    },
    async (request, reply) => {
      const { body } = request;
      const { session, user } = await authController.login(body);

      reply.code(200).send({
        status: 'Success',
        message: 'Login Ok !!!',
        data: {
          user,
          token: session.token,
          expiresAt: session.expiresAt.toISOString()
        }
      });
    }
  );

  fastify.post(
    '/logout',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              message: { type: 'string' }
            }
          }
        }
      },
      preValidation: fastify.auth([requireLoginedHook])
    },
    async (request, reply) => {
      const sessionToken = request.headers.authorization?.split(' ')[1];

      const message = await authController.logout(sessionToken);

      reply.send({
        message
      });
    }
  );
}

module.exports = authRoutes;
