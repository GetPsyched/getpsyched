// @ts-check
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    RESUME_URL: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    RESUME_URL: process.env.RESUME_URL,
  },
});
