const fastifyPlugin = require('fastify-plugin');
const { serializerCompiler, validatorCompiler } = require('fastify-type-provider-zod');

module.exports = fastifyPlugin((fastify) => {
  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);
});
