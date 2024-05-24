import prisma from "../prisma-client"

interface UserInterface {
    name: string,
    email: string,
    password: string
}

export class CreateUserService {
    async query({ name, email, password }: UserInterface) {

        if (!name || !email || !password) {
            throw new Error("There are empty fields.")
        }

        const findEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (findEmail) {
            throw new Error("A user with this data already exists.")
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return user
    }
}