const { addMilliseconds } = require('date-fns');
const ms = require('ms');

const { comparePassword, hashPassword, signSessionToken } = require('../utils/index.js');
const prisma = require('../database/index.js');
const { UnprocessableEntity } = require('../utils/errors.js');

const register = async (body) => {
  try {
    const hashedPassword = await hashPassword(body.password);
    const newuser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword
      }
    });

    const sessionToken = signSessionToken({
      userId: newuser.id
    });
    const expiresAt = addMilliseconds(new Date(), ms(process.env.SESSION_TOKEN_EXPIRES_IN));

    const session = await prisma.session.create({
      data: {
        userId: newuser.id,
        token: sessionToken,
        expiresAt
      }
    });
    return { newuser, session };
  } catch (error) {
    throw error;
  }
};

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  if (!user) {
    throw new UnprocessableEntity('User Not Registered !!!');
  }

  const isPasswordMatch = await comparePassword(password, user.password);
  if (!isPasswordMatch) {
    throw new UnprocessableEntity('Authentication Error !!!');
  }

  const sessionToken = signSessionToken({ userId: user.id, demo: 'demo' });
  const expiresAt = addMilliseconds(new Date(), ms(process.env.SESSION_TOKEN_EXPIRES_IN));

  const session = await prisma.session.create({
    data: {
      userId: user.id,
      token: sessionToken,
      expiresAt
    }
  });

  return { user, session };
};

const logout = async (sessionToken) => {
  await prisma.session.delete({
    where: {
      token: sessionToken
    }
  });

  return 'Logout successful !!!';
};

module.exports = {
  register,
  login,
  logout
};
