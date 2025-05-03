import { Request, Response } from "express";
import { findAllByUsers, sum } from "./service";

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
  res.json(users);
};

// 유저 한명 가져오기
export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, name: `사용자 ${id}` });
};
