import { Router, Response, Request } from "express";
import {
  addUser,
  deleteUserById,
  editUserById,
  getUserList,
} from "../controllers/user.controller";

const router = Router();

//Lista todos os usuários - /user/list
router.get("/user/list", async (req: Request, res: Response) => {
  await getUserList(req, res);
});

//Deleta um usuário - /user/delete/:id
router.delete("/user/delete/:id", async (req: Request, res: Response) => {
  await deleteUserById(req, res);
});

//Adiciona um usuário - /user/add
router.post("/user/add", async (req: Request, res: Response) => {
  await addUser(req, res);
});

//Altera as informações do usuário - /user/edit/:id
router.patch("/user/edit/:id", async (req: Request, res: Response) => {
  await editUserById(req, res);
});

export default router;
