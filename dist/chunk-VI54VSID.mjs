import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";

// src/error-handler.ts
var errorHandler = (error, request, reply) => {
  const { validation, validationContext } = error;
  if (validation !== void 0) {
    return reply.status(400).send({
      message: "Error during validation",
      errors: validation
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Internal server error!" });
};

export {
  errorHandler
};
