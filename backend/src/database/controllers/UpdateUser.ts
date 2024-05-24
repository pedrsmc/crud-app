import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUser {
    async handle(req: FastifyRequest, rep: FastifyReply) {

        const { id } = req.query as { id: string }
        const { name, email, password } = req.body as { name: string, email: string, password: string }

        const updateUserService = new UpdateUserService()
        const updatedUser = await updateUserService.query({ id, name, email, password })

        rep.send(updatedUser)
    }
}