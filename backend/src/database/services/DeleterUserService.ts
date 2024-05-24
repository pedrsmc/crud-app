import prisma from "../prisma-client";

export class DeleteUserService {
    async query(id: string) {

        if (!id) {
            throw new Error("The id was not provided")
        }

        const findUser = await prisma.user.findFirst({
            where: {
                id
            }
        })

        if (!findUser) {
            throw new Error("A user with this id was not founded.")
        }


        const deleteUser = await prisma.user.delete({
            where: {
                id
            }
        })


        return deleteUser
    }
}