import { FastifyInstance  } from "fastify";
import { BadRequest } from "./routes/_errors/bad-request";
import { ZodError } from "zod";

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
    const { validation, validationContext } = error

    if (validation !== undefined ) {
        return reply.status(400).send({
            message: 'Error during validation',
            errors: validation
        })
    }

    if (error instanceof BadRequest) {
        return reply.status(400).send({ message : error.message })
    }

    return reply.status(500).send({ message: 'Internal server error!' })
}