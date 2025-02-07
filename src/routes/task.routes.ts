import { Router, Response, Request } from "express";
import {
  addTask,
  deleteTaskById,
  editTaskStatusById,
  getTaskList,
  getTaskListByUserId,
} from "../controllers/task.controller";

const router = Router();

//Lista as tarefas - /task/list
router.get("/task/list", async (req: Request, res: Response) => {
  await getTaskList(req, res);
});

//Listar tarefas por usuario - /task/list/user/:id
router.get("/task/list/:id", async (req: Request, res: Response) => {
  await getTaskListByUserId(req, res);
});

//Deleta uma tarefa - /task/delete
router.delete("/task/delete/:id", async (req: Request, res: Response) => {
  await deleteTaskById(req, res);
});

//Adiciona uma tarefa - /task/add
router.post("/task/add", async (req: Request, res: Response) => {
  await addTask(req, res);
});

//Atualizar status da tarefa - /task/edit/:id
router.patch("/task/edit/:id", async (req: Request, res: Response) => {
  await editTaskStatusById(req, res);
});

export default router;
