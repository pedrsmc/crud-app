import Fastify from "fastify"
import fastifyCors from "@fastify/cors"

import { routes } from "./routes"

const fastify = Fastify({ logger: true })

fastify.setErrorHandler((err, req, rep) => {
    rep.code(400).send({ message: err.message })
})

const start = async () => {
    fastify.register(fastifyCors)
    fastify.register(routes)

    try {
        await fastify.listen({ port: 3000 })
    } catch (error) {
        process.exit(1)
    }
}

start()