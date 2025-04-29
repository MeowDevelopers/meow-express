import { Request, Response } from 'express';
import { UserService } from '../service/service';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserService.getAllUsers();
    if (!users || users.length === 0) {
         res.status(204).send();
         return;
    }
    res.json(users);
    return
} catch (error) {
    console.error('사용자 조회 중 오류 발생:', error);
    res.status(500).json({ message: '사용자 조회에 실패했습니다.' }); 
    return;
}
};
