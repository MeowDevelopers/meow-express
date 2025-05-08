import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            user_id: true,
            user_nickname: true,
            user_email: true,
        },
    });
    return users;
}

