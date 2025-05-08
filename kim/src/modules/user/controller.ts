import { Request, Response } from "express";
import { getUsers } from "../../service/user/userService";
import { PrismaClient, user_provider_type } from "@prisma/client";

const prisma = new PrismaClient();

// 전체 유저 목록 가져오기
export const getAllUserList = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("에러 내용:", error);
    res.status(500).json({ message: "서버 500! " });
  }
};

// 유저 생성
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        user_email: "kimeunji@gmail.com",
        user_nickname: "choi",
        provider_type: "KAKAO",
        created_at: new Date(),
        modified_at: new Date(),
        user_last_login_date: new Date(),
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    console.error("유저 생성 실패:", error);
    res.status(500).json({ message: "서버 오류로 유저를 생성할 수 없습니다." });
  }
};

// 유저 정보 업데이트 
export const updateUserNickName = async (req: Request, res: Response) => {
  const { user_id, user_nickname } = req.body;
  try {
    const updatedUserNickName = await prisma.user.update({
      where: { user_id: Number(user_id) },
      data: {user_nickname: String(user_nickname)}
    })
    res.status(200).json({message:"유저 닉네임 변경 성공", user_id:user_id, user_nickname:user_nickname})
  } catch (error) {
    res.status(500).json({message:"변경 실패"})
  }
}


// 유저 삭제 
export const deleteUser = async (req: Request, res: Response) => {
  const userID = Number(req.params.id);
  try {
    const deletedUser = await prisma.user.delete({
      where: { user_id: userID }
    });
    res.status(200).json({ message: "유저 삭제 성공", user: deletedUser })
  } catch (error) {
    res.status(500).json({ message: "유저 삭제 실패" })
  }
};

