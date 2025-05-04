import { db } from "../db/db";

export const getAllUsers = async () => {
  const [rows] = await db.execute(
    `SELECT user_email, user_nickname, user_type FROM user WHERE deleted = false AND dormancy = false`
  );
  return rows;
};
