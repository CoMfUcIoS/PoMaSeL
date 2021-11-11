import dotenv from "dotenv";
import fastify from "fastify";
import cookie from "fastify-cookie";
import cors from "fastify-cors";
import debug from "routes/debug";
import test from "utils/app";

console.log(test);

dotenv.config();

const build = (options: object) => {
  const app = fastify(options);

  app.register(cors, {
    origin: true,
    credentials: true,
  });

  app.register(cookie);

  app.register(debug);
  return app;
};

export default build;
