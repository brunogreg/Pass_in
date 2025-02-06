import 'dotenv/config';
import { fastify } from "fastify";
import { checkIn } from "./routes/check-in";
import { fastifyCors } from "@fastify/cors";
import { getEvent } from "./routes/get-event";
import { errorHandler } from './error-handler';
import { fastifySwagger } from "@fastify/swagger";
import { createEvent } from "./routes/create-event";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { getAttendeeBadge } from "./routes/get_attendee-badge";
import { registerForEvent } from "./routes/register-for-event";
import { getEventAttendees } from "./routes/get-event-attendees";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";


export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: '*',
})

app.register(fastifySwagger, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'pass.in',
            description: 'Especificações da API para o back-end da aplicação pass.in construída durante o NLW Unite da Rocketseat',
            version: '1.0.0'
        },
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(checkIn)
app.register(getEvent)
app.register(createEvent)
app.register(getAttendeeBadge)
app.register(registerForEvent)
app.register(getEventAttendees)

app.setErrorHandler(errorHandler)



app.listen({ port: 3334, host: '0.0.0.0' }).then(() => {
    console.log("HTTP server running!")
})