import { Response } from "express";

export const BadRequest = (res: Response, message: string, status: number) => {
    res.status(status).json({error: message});
    return;
}
