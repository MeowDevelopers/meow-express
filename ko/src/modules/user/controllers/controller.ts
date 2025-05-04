import { Request, Response } from "express";
import { getAllUsers } from "../../../services/service";

// 유저 목록 가져오기
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류" });
  }
};
