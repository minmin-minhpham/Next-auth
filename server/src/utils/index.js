const StatusCodes = require('./httpStatusCode/status.codes');
const ReasonPhrases = require('./httpStatusCode/reason.phrases');
const { hashPassword, comparePassword } = require('./crypto');
const { signSessionToken } = require('./jwt');

module.exports = {
  httpStatusCode: {
    StatusCodes,
    ReasonPhrases
  },

  hashPassword,
  comparePassword,
  signSessionToken
};
