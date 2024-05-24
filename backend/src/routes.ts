import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"
import { CreateUser } from "./database/controllers/CreateUser"
import { ListUsers } from "./database/controllers/ListUsers"
import { DeleteUser } from "./database/controllers/DeleterUser"
import { UpdateUser } from "./database/controllers/UpdateUser"

export async function routes(fastify: FastifyInstance, opt: FastifyPluginOptions) {

    fastify.post('/create', function (req: FastifyRequest, rep: FastifyReply) {
        return new CreateUser().handle(req, rep)
    })

    fastify.get('/users', function (req: FastifyRequest, rep: FastifyReply) {
        return new ListUsers().handle(rep)
    })

    fastify.delete('/remove', function (req: FastifyRequest, rep: FastifyReply) {
        return new DeleteUser().handle(req, rep)
    })

    fastify.put('/update', function (req: FastifyRequest, rep: FastifyReply) {
        return new UpdateUser().handle(req, rep)
    })
}