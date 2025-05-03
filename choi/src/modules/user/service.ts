import { RowDataPacket } from "mysql2";
import { db } from "../../config/database";

export interface User extends RowDataPacket {
  user_id: number;
  user_email: string | null;
  user_profile: string | null;
  user_password: string | null;
  user_type: "ADMIN" | "BASIC_USER"; // ENUM
  user_nickname: string | null;
  provider_type: "KAKAO" | "NAVER" | "GOOGLE" | "ORIGIN"; // ENUM
  provider_key: string | null;
  created_at: Date | null;
  modified_at: Date | null;
  user_last_login_date: Date | null;
  deleted: 0 | 1;
  dormancy: 0 | 1;
  refresh_token: string | null;
  profile_description: string | null;
}

export const sum = (a: number, b: number) => {
  return a + b;
};

export const findAllByUsers = async (): Promise<User[]> => {
  try {
    const [rows] = await db.query<User[]>("SELECT * FROM `user`");
    return rows;
  } catch (error: any) {
    console.error("db error : ", error);
    return [];
  }
};
