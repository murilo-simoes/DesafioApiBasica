import { z } from "zod";
import mongoose from "../config/db";

export const createTaskSchema = z.object({
  titulo: z
    .string({
      required_error: "O campo titulo é obrigatório",
      invalid_type_error: "O campo titulo deve ser uma string",
    })
    .nonempty("O campo titulo não pode ser vazio")
    .min(3, { message: "O campo titulo deve ter pelo menos 3 caracteres" })
    .max(100, { message: "O campo titulo pode ter no máximo 50 caracteres" }),
  descricao: z
    .string({ invalid_type_error: "A campo descricao deve ser uma string" })
    .max(500, {
      message: "A campo descricao pode ter no máximo 500 caracteres",
    })
    .optional(),
  usuario_id: z
    .string({
      required_error: "O campo usuario_id é obrigatório",
      invalid_type_error: "O usuario_id deve ser uma string",
    })
    .refine((id) => mongoose.Types.ObjectId.isValid(id), {
      message: "ID inválido.",
    }),
  stats: z
    .enum(["pendente", "em progresso", "concluida"], {
      message:
        "O campo stats deve ser 'pendente', 'em progresso' ou 'concluida'.",
    })
    .optional(),
});

export const updateTaskSchema = z.object({
  stats: z.enum(["pendente", "em progresso", "concluida"], {
    message:
      "O campo stats deve ser 'pendente', 'em progresso' ou 'concluida'.",
    required_error: "O campo campo stats é obrigatório.",
  }),
});
