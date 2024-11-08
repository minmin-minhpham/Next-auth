const { createSigner } = require('fast-jwt');
const ms = require('ms');

exports.signSessionToken = (payload, options = {}) => {
  const signSync = createSigner({
    key: process.env.SESSION_TOKEN_SECRET,
    algorithm: 'HS256',
    expiresIn: ms(process.env.SESSION_TOKEN_EXPIRES_IN),
    ...options
  });

  return signSync({ ...payload });
};
