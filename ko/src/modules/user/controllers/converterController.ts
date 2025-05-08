import { Request, Response } from "express";

export const converter = async (req: Request, res: Response) => {
    const num: number = 300000;
    const convertNum = num.toLocaleString();
    
    console.log(convertNum);

    res.json(convertNum);
};