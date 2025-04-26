import { Request, Response } from "express";

// 유저 목록 가져오기
export const getUsers = (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "철수" },
    { id: 2, name: "영희" },
  ]);
};

// 유저 한명 가져오기
export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, name: `사용자 ${id}` });
};
