import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUser {
    async handle(req: FastifyRequest, rep: FastifyReply) {
        const { name, email, password, } = req.body as { name: string, email: string, password: string }

        const createUserService = await new CreateUserService().query({ name, email, password })

        rep.send({ message: "The user has been registered." })
    }
}