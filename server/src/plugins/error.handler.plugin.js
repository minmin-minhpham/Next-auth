const fastifyPlugin = require('fastify-plugin');
const { ApplicationError } = require('../utils/errors.js');
const { Prisma } = require('@prisma/client');
// const { ZodError } = require('zod');
// const z = require('zod');

const errorHandlerPlugin = fastifyPlugin((fastify) => {
  fastify.setNotFoundHandler((_, reply) => {
    reply.code(404).send({
      message: 'Not Found'
    });
  });

  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);

    let errMessage = {
      status: 'Error',
      message: error.message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack.split('\n').map((line) => line.trim()) })
    };

    if (error && error.validationContext === 'body' && error.validation) {
      errMessage.message = {};

      error.validation.map((err) => {
        errMessage.message[err.instancePath.replace('/', '')] = err.message;
      });

      return reply.code(error.statusCode).send(errMessage);
    }

    if (error instanceof ApplicationError) {
      return reply.code(error.statusCode).send(errMessage);
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      errMessage.message =
        process.env.NODE_ENV === 'development'
          ? errMessage.message.split('\n').map((line) => line.trim())
          : 'Service unavailable: Database operation timed out';

      if (error.code === 'P2002') {
        const duplicateField = error.meta.target?.split('_')[1];

        errMessage.message = `The value already exists for the field: ${duplicateField}`;
        return reply.code(409).send(errMessage);
      }

      return reply.code(503).send(errMessage);
    }

    errMessage.message = process.env.NODE_ENV === 'development' ? errMessage.message : 'Internal Server Error';
    return reply.code(500).send(errMessage);
  });
});

module.exports = errorHandlerPlugin;
