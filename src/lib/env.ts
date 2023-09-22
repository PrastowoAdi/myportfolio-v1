import zod from "zod";
const envSchema = zod.object({
  DATABASE_URL: zod.string().nonempty(),
  GOOGLE_CLIENT_ID: zod.string().nonempty(),
  GOOGLE_CLIENT_SECRET: zod.string().nonempty(),
  NEXTAUTH_URL: zod.string().nonempty(),
  NEXTAUTH_SECRET: zod.string().nonempty(),
  DOMAIN: zod.string().nonempty(),
  ID: zod.string().nonempty(),
  NODE_ENV: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);
