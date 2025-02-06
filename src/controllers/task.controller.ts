import { Router, Response, Request, NextFunction } from "express";
import { z } from "zod";
import { BadRequest } from "../utils/utils";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validations/task.validations";
import User from "../models/User";
import Task from "../models/Task";
import mongoose from "../config/db";

export const getTaskList = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks: tasks });
  } catch (err) {
    BadRequest(res, err.message, 400);
  }
};

export const getTaskListByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return BadRequest(res, "ID inválido!", 400);
  }

  try {
    const tasks = await Task.find({ usuario_id: id });

    res.status(200).json({ tasks: tasks });
  } catch (err) {
    return BadRequest(res, err.message, 400);
  }
};

export const deleteTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return BadRequest(res, "ID inválido!", 400);
  }

  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return BadRequest(res, "Tarefa não encontrada.", 404);
    }

    res.status(200).json({ message: "Tarefa deletada com sucesso." });
  } catch (err) {
    return BadRequest(res, err.message, 400);
  }
};

export const addTask = async (req: Request, res: Response) => {
  try {
    const data = createTaskSchema.parse(req.body);

    const exists_user = await User.findById(data.usuario_id);

    if (!exists_user) {
      return BadRequest(
        res,
        "Não tem nenhum usuário com esse ID cadastrado",
        400
      );
    }

    const task = new Task({
      titulo: data.titulo,
      descricao: data.descricao,
      stats: data.stats,
      usuario_id: data.usuario_id,
    });

    await task.save();

    res.status(201).json({ message: "Tarefa cadastrada com sucesso." });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorMessages = err.errors.map((error) => error.message);
      return BadRequest(res, errorMessages.join(", "), 400);
    } else {
      return BadRequest(res, err.message, 400);
    }
  }
};

export const editTaskStatusById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return BadRequest(res, "ID inválido!", 400);
  }

  try {
    const data = updateTaskSchema.parse(req.body);

    const task = await Task.findByIdAndUpdate(id, {
      stats: data.stats,
    });

    if (!task) {
      return BadRequest(res, "Tarefa não encontrada.", 404);
    }

    res.status(200).json({ message: "Status da tarefa alterada com sucesso." });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorMessages = err.errors.map((error) => error.message);
      return BadRequest(res, errorMessages.join(", "), 400);
    } else {
      return BadRequest(res, err.message, 400);
    }
  }
};
