import { Router, Response, Request, NextFunction } from "express";
import { z } from "zod";
import { BadRequest } from "../utils/utils";
import {
  createUserSchema,
  updateUserSchema,
} from "../validations/user.validations";
import User from "../models/User";
import mongoose from "../config/db";

export const getUserList = async (req: Request, res: Response) => {
  try {
    const all_users = await User.find();
    res.status(200).json({ users: all_users });
  } catch (err) {
    return BadRequest(res, err.message, 400);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return BadRequest(res, "ID inválido!", 400);
  }

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return BadRequest(
        res,
        "Não existe nenhum usuário cadastrado com esse id!",
        404
      );
    }

    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (err) {
    return BadRequest(res, err.message, 400);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const data = createUserSchema.parse(req.body);

    const exists_user = await User.findOne({ email: data.email });

    if (exists_user) {
      return BadRequest(
        res,
        "Já existe um usuário cadastrado com esse email.",
        409
      );
    }

    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    await user.save();

    res
      .status(201)
      .json({ message: "Usuário criado com sucesso.", user: user });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorMessages = err.errors.map((error) => error.message);
      return BadRequest(res, errorMessages.join(", "), 400);
    } else {
      return BadRequest(res, err.message, 400);
    }
  }
};

export const editUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return BadRequest(res, "ID inválido!", 400);
  }

  try {
    const data = updateUserSchema.parse(req.body);

    if (Object.keys(data).length === 0) {
      return BadRequest(res, "Nenhum dado enviado para atualização!", 400);
    }

    const user = await User.findByIdAndUpdate(id, data, { new: true });

    if (!user) {
      return BadRequest(res, "Usuário não encontrado!", 404);
    }

    res
      .status(200)
      .json({ message: "Usuário atualizado com sucesso.", user: user });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorMessages = err.errors.map((error) => error.message);
      return BadRequest(res, errorMessages.join(", "), 400);
    } else {
      return BadRequest(res, err.message, 400);
    }
  }
};
