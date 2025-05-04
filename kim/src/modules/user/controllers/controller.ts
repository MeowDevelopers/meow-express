import { Request, Response } from "express";
import { getUsers } from "../../../service/user/userService";

// 전체 유저 목록 가져오기
export const getUSerController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
      console.error("에러 내용:", error);
    res.status(500).json({message:"서버 500! "})
  }
}


