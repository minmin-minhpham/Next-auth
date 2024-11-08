const z = require('zod');

exports.RegisterBody = z
  .object({
    name: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
  })
  .strict()
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords do not match',
        path: ['confirmPassword']
      });
    }
  });

exports.RegisterRes = z.object({
  data: z.object({
    newuser: z.object({
      name: z.string(),
      email: z.string()
    }),
    token: z.string(),
    expiresAt: z.string()
  }),

  message: z.string()
});

exports.LoginBody = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100)
});

exports.LoginRes = z.object({
  data: z.object({
    user: z.object({
      name: z.string(),
      email: z.string()
    }),
    token: z.string(),
    expiresAt: z.string()
  }),
  message: z.string()
});
