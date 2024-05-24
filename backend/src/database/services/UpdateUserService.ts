import prisma from "../prisma-client"

interface UserInterface {
    id: string,
    name: string,
    email: string,
    password: string
}

export class UpdateUserService {
    async query({ id, name, email, password }: UserInterface) {

        if (!id) {
            throw new Error("The id was not provided")
        }

        const findUser = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if (!findUser) {
            throw new Error("A user with this id was not founded.")
        }

        const update = await prisma.user.update({
            where: {
                id
            },

            data: {
                name,
                email,
                password
            }

        })

        return update
    }
}