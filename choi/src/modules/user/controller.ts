import { Request, Response } from "express";
import {
  deleteUser,
  findAllByUsers,
  saveUser,
  sum,
  updateUserEmail,
} from "./service";

//this 참조 예제
class User {
  name = "철수";

  sayHello = () => {
    console.log(`안녕 나는 ${this.name}야`);
  };
}

// 유저 목록 가져오기
export const getUsers = async (req: Request, res: Response) => {
  const user = new User();
  const greet = user.sayHello;
  greet();

  console.log("더하기 결과는" + sum(1, 2));

  const users = await findAllByUsers();
  console.log(users);
  res.json(
    users.map((user) => ({
      ...user,
      user_id: user.user_id.toString(), // 💡 BigInt → string
    }))
  );
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = await saveUser();
  console.log("response : " + newUser);
  res.json({
    response: "ok",
  });
};

// 유저 한명 가져오기
export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, name: `사용자 ${id}` });
};

export const removeUser = async (req: Request, res: Response) => {
  await deleteUser();
  res.json({
    response: "ok",
  });
};

export const patchUser = async (req: Request, res: Response) => {
  await updateUserEmail();
  res.json({
    response: "ok",
  });
};
