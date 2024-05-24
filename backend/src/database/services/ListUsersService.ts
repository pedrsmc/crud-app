import prisma from "../prisma-client";

export class ListUsersService {
    async query() {
        const allUsers = prisma.user.findMany()

        if (!allUsers) {
            throw new Error("No user has been registered yet.")
        }

        return allUsers
    }
}