import { Router, Response, Request, NextFunction } from "express";
import { z } from "zod";
import { BadRequest } from "../lib/response";
import User from "../model/User";

const router = Router();

//Adiciona usuário
router.post("/user", async (req: Request, res: Response) => {
  const createMeasureBody = z.object({
    name: z.string()
      .min(2, { message: 'O nome precisa ter pelo menos 2 caracteres' })
      .max(50, { message: 'O nome pode ter no máximo 50 caracteres' }),

    email: z.string()
      .email({ message: 'O email deve ser válido' }),

    password: z.string()
      .min(8, { message: 'A senha precisa ter pelo menos 8 caracteres' })
      .regex(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
      .regex(/[a-z]/, { message: 'A senha deve conter pelo menos uma letra minúscula' })
      .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' })
      .regex(/[\W_]/, { message: 'A senha deve conter pelo menos um caractere especial' })
  });

  try {
    const data = createMeasureBody.parse(req.body);

    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password
    });

    await user.save();
    res.send(user);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorMessages = err.errors.map(error => error.message); 
      BadRequest(res, errorMessages.join(", "), 400); 
    } else {
      BadRequest(res, err.message, 400);  
    }
  }
});


export default router;
