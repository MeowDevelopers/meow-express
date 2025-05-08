import { prisma } from "../db/prisma";

// 유저 생성
export const createUser = async (data: {
  user_email: string;
  user_password: string;
  user_nickname: string;
  provider_type: "KAKAO" | "NAVER" | "GOOGLE" | "ORIGIN";
}) => {
  const now = new Date();
  return prisma.user.create({
    data: {
      ...data,
      created_at: now,
      modified_at: now,
      user_last_login_date: now,
    },
  });
};

// 유저 목록 조회
export const getAllUsers = async () => {
  return prisma.user.findMany({
    where: { deleted: false, dormancy: false },
  });
};

// 유저 수정
export const updateUser = async (user_id: bigint, updateData: Partial<{
  user_nickname: string;
}>) => {
  return prisma.user.update({
    where: { user_id },
    data: {
      ...updateData,
      modified_at: new Date(),
    },
  });
};

// 유저 삭제
export const deleteUser = async (user_id: bigint) => {
  return prisma.user.update({
    where: { user_id },
    data: { deleted: true },
  });
};
