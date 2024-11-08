const prisma = require('prisma');
const { UnauthorizedError } = require('../utils/errors.js');

const requireLoginedHook = async (request) => {
  const sessionToken = request.headers.authorization?.split(' ')[1];

  if (!sessionToken) throw new UnauthorizedError('Authorization token is missing !!!');

  const session = await prisma.session.findUnique({
    where: {
      token: sessionToken
    },
    include: {
      account: true
    }
  });

  if (!session_row) throw new AuthError('Session Token is missing. Please log in again !!!');

  request.user = session.user;
};

module.exports = requireLoginedHook;
