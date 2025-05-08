import { Request, Response } from "express";
import * as userService from "../../../services/service";

// 유저 생성
export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

// 유저 목록 조회
export const getUsers = async (_: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

// 유저 수정
export const updateUser = async (req: Request, res: Response) => {
  const id = BigInt(req.params.id);
  const user = await userService.updateUser(id, req.body);
  res.json(user);
};

// 유저 삭제
export const deleteUser = async (req: Request, res: Response) => {
  const id = BigInt(req.params.id);
  await userService.deleteUser(id);
  res.status(204).end();
};
