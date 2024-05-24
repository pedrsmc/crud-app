import { FastifyReply, FastifyRequest } from "fastify";
import { ListUsersService } from "../services/ListUsersService";

export class ListUsers {
    async handle(rep: FastifyReply) {
        const listUsersService = await new ListUsersService().query()

        rep.send(listUsersService)
    }
}