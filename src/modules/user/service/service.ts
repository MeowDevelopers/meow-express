import { RowDataPacket } from 'mysql2';
import {db} from '../../../config/database';

export interface User extends RowDataPacket {
    user_id: number;
    user_email: string;
    user_nickname: string;
}

export class UserService{
    static async getAllUsers(): Promise<User[] | null>{
    try{
      const [rows] = await db.query<User[]>('SELECT user_id, user_email, user_nickname FROM user') as [User[], any];
      if (rows.length === 0) {
        return [];
      }
      return rows;
    }catch (error) {
      console.error('getAllUsers 쿼리 에러:', error);
      throw new Error('getAllUsers 쿼리 에러');
    }
  }
}