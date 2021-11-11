import { FastifyInstance } from "fastify";

import pkg from "../../../package.json";
// const { isInitialized } = require("../../utils/app");

const home = async () => ({
  message: pkg.description,
  version: pkg.version,
});

const healthCheck = async () => ({
  status: "ok",
});

// const dbStatus = async (_request, _reply) => {
//   if (await isInitialized()) {
//     return { status: "initialized" };
//   }

//   return { status: "uninitialized" };
// };

export default (fastify: FastifyInstance, __, done: () => void) => {
  fastify.get("/", home);
  fastify.get("/health", healthCheck);
  // fastify.get("/db_status", dbStatus);

  done();
};
