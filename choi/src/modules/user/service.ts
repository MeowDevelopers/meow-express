import { RowDataPacket } from "mysql2";
import { db } from "../../config/database";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const sum = (a: number, b: number) => {
  return a + b;
};

//Read
export const findAllByUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

//Create
export const saveUser = async () => {
  try {
    const newUser = await prisma.user.create({
      data: {
        user_email: "chl1234@gmail.com",
        user_profile: "",
        user_password: "12341234",
        user_type: "BASIC_USER", // 기본값 지정 가능
        user_nickname: "hiuwqeioruiopqwer",
        provider_type: "KAKAO",
        provider_key: "123123123",
        profile_description: "asdfasdfasdfasdf",
        created_at: "2025-05-03T12:11:11Z",
        modified_at: "2025-05-03T12:11:11Z",
        user_last_login_date: "2025-05-03T12:11:11Z",
      } as const,
    });
    return newUser;
  } catch (err) {
    console.error("User insert error:", err);
    return { message: "Insert failed" };
  }
};

export const deleteUser = async () => {
  const result = await prisma.user.delete({
    where: {
      provider_key: "123123123",
    },
  });
  console.log("user delete result : " + result);
};

export const updateUserEmail = async () => {
  await prisma.user.update({
    where: { provider_key: "123123123" },
    data: {
      user_email: Date.now() + "@gmail.com",
    },
  });
};
