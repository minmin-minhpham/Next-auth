require('dotenv').config({ path: '.env' });

const cors = require('@fastify/cors');
const helmet = require('@fastify/helmet');
const cookie = require('@fastify/cookie');
const fastifyAuth = require('@fastify/auth');

const errorHandlerPlugin = require('./plugins/error.handler.plugin.js');
const validatorCompilerPlugin = require('./plugins/validator.compiler.plugin.js');
const routes = require('./routes/index.js');

const Fastify = require('fastify');
const app = Fastify({
  logger: {
    level: 'debug',
    transport: {
      target: 'pino-pretty', // use pino
      options: {
        colorize: true,
        translateTime: 'yyyy-mm-dd HH:MM:ss'
      }
    }
  }
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    const whitelist = ['*'];

    app.register(cors, {
      origin: whitelist,
      credentials: true
    });
    app.register(helmet, {
      crossOriginResourcePolicy: {
        policy: 'cross-origin'
      }
    });
    app.register(cookie);
    app.register(fastifyAuth, {
      defaultRelation: 'and'
    });

    // Plugins
    app.register(errorHandlerPlugin);
    app.register(validatorCompilerPlugin);

    // Routes
    app.register(routes, {
      prefix: '/v1'
    });

    app.listen({ port: process.env.PORT });

    // app.log.info(`The server is running:: ${process.env.PROTOCOL}://${process.env.DOMAIN}:${process.env.PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
