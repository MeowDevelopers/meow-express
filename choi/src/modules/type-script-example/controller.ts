import { Request, Response } from "express";

export const filterAndPrintUserData = (req: Request, res: Response) => {
  const userDatas = [
    { name: "김철수83", phoneNumber: "010-2734-4812" },
    { name: "이영희51", phoneNumber: "010-6201-8490" },
    { name: "박민수17", phoneNumber: "010-3341-9274" },
    { name: "홍길동24", phoneNumber: "010-8432-1094" },
    { name: "조민혁99", phoneNumber: "010-5571-2394" },
    { name: "최지우42", phoneNumber: "010-1620-4805" },
    { name: "정수빈38", phoneNumber: "010-7843-1932" },
    { name: "한예린10", phoneNumber: "010-4002-9934" },
    { name: "강지민65", phoneNumber: "010-9842-1093" },
    { name: "유세윤33", phoneNumber: "010-2187-7351" },
    { name: "홍길동57", phoneNumber: "010-9023-5482" },
    { name: "김철수01", phoneNumber: "010-3182-4007" },
    { name: "이영희76", phoneNumber: "010-5728-8123" },
    { name: "박민수48", phoneNumber: "010-8439-5923" },
    { name: "조민혁23", phoneNumber: "010-3410-7342" },
    { name: "최지우99", phoneNumber: "010-6704-1835" },
    { name: "정수빈06", phoneNumber: "010-7523-9001" },
    { name: "한예린54", phoneNumber: "010-2681-7342" },
    { name: "강지민18", phoneNumber: "010-9834-4276" },
    { name: "유세윤79", phoneNumber: "010-2047-7190" },
    { name: "홍길동21", phoneNumber: "010-3182-6920" },
    { name: "김철수36", phoneNumber: "010-6031-5824" },
    { name: "이영희98", phoneNumber: "010-4720-1009" },
    { name: "박민수65", phoneNumber: "010-2123-4578" },
    { name: "조민혁14", phoneNumber: "010-6923-1832" },
    { name: "최지우80", phoneNumber: "010-7342-2048" },
    { name: "정수빈91", phoneNumber: "010-8402-9133" },
    { name: "한예린11", phoneNumber: "010-6784-5042" },
    { name: "강지민22", phoneNumber: "010-4011-7203" },
    { name: "유세윤39", phoneNumber: "010-3521-8201" },
    { name: "홍길동87", phoneNumber: "010-9273-6130" },
    { name: "김철수20", phoneNumber: "010-1483-8300" },
    { name: "이영희31", phoneNumber: "010-8392-1580" },
    { name: "박민수90", phoneNumber: "010-6511-4021" },
    { name: "조민혁03", phoneNumber: "010-9820-3127" },
    { name: "최지우74", phoneNumber: "010-2739-7821" },
    { name: "정수빈58", phoneNumber: "010-6728-1043" },
    { name: "한예린25", phoneNumber: "010-4812-6901" },
    { name: "강지민66", phoneNumber: "010-9034-4729" },
    { name: "유세윤04", phoneNumber: "010-7823-1187" },
  ];

  userDatas
    .filter((it) => it.name.includes("수"))
    .forEach((it) => {
      console.log("출력 : " + JSON.stringify(it));
    });
  console.log("출력 종료");
  res.json({ response: "ok" });
};

export const moneyConvert = (req: Request, res: Response) => {
  const money: number = 300000;
  console.log("금액 : " + money.toLocaleString());
  res.json({ response: "ok" });
};
