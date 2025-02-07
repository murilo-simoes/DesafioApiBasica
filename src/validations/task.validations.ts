import { z } from "zod";
import mongoose from "../config/db";

export const createTaskSchema = z.object({
  titulo: z
    .string({
      required_error: "O campo titulo é obrigatório",
      invalid_type_error: "O campo titulo deve ser uma string",
    })
    .trim()
    .nonempty("O campo titulo não pode ser vazio")
    .min(3, { message: "O campo titulo deve ter pelo menos 3 caracteres" })
    .max(50, { message: "O campo titulo pode ter no máximo 50 caracteres" }),
  descricao: z
    .string({ invalid_type_error: "O campo descricao deve ser uma string" })
    .trim()
    .max(500, {
      message: "O campo descricao pode ter no máximo 500 caracteres",
    })
    .optional(),
  usuario_id: z
    .string({
      required_error: "O campo usuario_id é obrigatório",
      invalid_type_error: "O campo usuario_id deve ser uma string",
    })
    .trim()
    .refine((id) => mongoose.Types.ObjectId.isValid(id), {
      message: "ID inválido",
    }),
  status: z
    .string()
    .transform((val) => val.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    .refine((val) => ["pendente", "em progresso", "concluida"].includes(val), {
      message:
        "O campo status deve ser 'pendente', 'em progresso' ou 'concluida'",
    })
    .optional(),
});

export const updateTaskSchema = z.object({
  status: z
    .string()
    .transform((val) => val.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    .refine((val) => val.length > 0, {
      message: "O campo status é obrigatório",
    })
    .refine((val) => ["pendente", "em progresso", "concluida"].includes(val), {
      message:
        "O campo status deve ser 'pendente', 'em progresso' ou 'concluida'",
    }),
});
