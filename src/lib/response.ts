import { Response } from "express";

export const BadRequest = (res: Response, message: string, status: number) => {
    return res.status(status).json({error: message})
}
