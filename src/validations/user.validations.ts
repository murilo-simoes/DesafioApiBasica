import { z } from "zod";

export const createUserSchema = z.object({
  name: z
    .string({
      required_error: "O campo name é obrigatório",
      invalid_type_error: "O campo name deve ser uma string",
    })
    .trim()
    .nonempty("O campo name não pode ser vazio")
    .min(2, { message: "O campo name precisa ter pelo menos 2 caracteres" })
    .max(50, { message: "O campo name pode ter no máximo 50 caracteres" }),

  email: z
    .string({
      required_error: "O campo email é obrigatório",
      invalid_type_error: "O campo email deve ser uma string",
    })
    .trim()
    .nonempty("O campo email não pode ser vazio")
    .email({ message: "O campo email deve ser válido" }),

  password: z
    .string({
      required_error: "O campo senha é obrigatório",
      invalid_type_error: "O campo senha deve ser uma string",
    })
    .trim()
    .nonempty("O campo senha não pode ser vazio")
    .min(8, { message: "O campo senha precisa ter pelo menos 8 caracteres" })
    .regex(/[A-Z]/, {
      message: "O campo senha deve conter pelo menos uma letra maiúscula",
    })
    .regex(/[a-z]/, {
      message: "O campo senha deve conter pelo menos uma letra minúscula",
    })
    .regex(/[0-9]/, {
      message: "O campo senha deve conter pelo menos um número",
    })
    .regex(/[\W_]/, {
      message: "O campo senha deve conter pelo menos um caractere especial",
    }),
});

export const updateUserSchema = createUserSchema.partial();
