import {
  errorHandler
} from "./chunk-VI54VSID.mjs";
import {
  checkIn
} from "./chunk-KYNQGJG4.mjs";
import {
  createEvent
} from "./chunk-NISIRK2G.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getEventAttendees
} from "./chunk-ASXMDUU6.mjs";
import {
  getEvent
} from "./chunk-YU4MONPE.mjs";
import {
  getAttendeeBadge
} from "./chunk-IUKRZUCL.mjs";
import {
  registerForEvent
} from "./chunk-B3JEQL4M.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-5U5WPP7R.mjs";

// src/server.ts
import "dotenv/config";
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(checkIn);
app.register(getEvent);
app.register(createEvent);
app.register(getAttendeeBadge);
app.register(registerForEvent);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3334, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
