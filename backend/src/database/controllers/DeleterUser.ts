import { FastifyReply, FastifyRequest } from "fastify"
import { DeleteUserService } from "../services/DeleterUserService"

export class DeleteUser {
    async handle(req: FastifyRequest, rep: FastifyReply) {

        const { id } = req.query as { id: string }

        const deleteUserService = new DeleteUserService()
        const deleteUser = await deleteUserService.query(id)

        rep.send({ message: "The user has been removed." })
    }
}